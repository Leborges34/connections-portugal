
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Helper logging function for enhanced debugging
const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-PAYMENT] ${step}${detailsStr}`);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");
    
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");
    logStep("Stripe key verified");

    const body = await req.json();
    const { bookingInfo, userId } = body;
    
    if (!bookingInfo) throw new Error("Booking information is required");
    logStep("Received booking info", { bookingInfo });

    const serviceDisplayName = bookingInfo.serviceType || "Serviço";
    const partnerName = bookingInfo.partnerName || "Connections Partner";
    const amount = Math.round((bookingInfo.totalAmount || 0) * 100); // Convert to cents
    
    if (amount <= 0) throw new Error("Invalid amount");
    
    // Create Supabase client with anon key for auth
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );
    
    // Get user authentication if available
    let userEmail = "guest@example.com";
    let userName = "Guest";
    
    if (userId) {
      const authHeader = req.headers.get("Authorization");
      if (authHeader) {
        const token = authHeader.replace("Bearer ", "");
        const { data: userData } = await supabaseClient.auth.getUser(token);
        if (userData?.user?.email) {
          userEmail = userData.user.email;
          userName = userData.user.user_metadata?.name || userData.user.email.split('@')[0];
          logStep("User authenticated", { email: userEmail });
        }
      }
    }
    
    // Initialize Stripe
    const stripe = new Stripe(stripeKey, {
      apiVersion: "2023-10-16",
    });
    
    // Check if customer exists, create if not
    const customers = await stripe.customers.list({ email: userEmail, limit: 1 });
    let customerId;
    
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      logStep("Found existing customer", { customerId });
    } else {
      const newCustomer = await stripe.customers.create({
        email: userEmail,
        name: userName,
        metadata: {
          source: "connections_platform"
        }
      });
      customerId = newCustomer.id;
      logStep("Created new customer", { customerId });
    }
    
    // Create a discreet statement descriptor
    const statementDescriptor = "Connections Service";
    
    // Create a payment intent with appropriate metadata
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `${serviceDisplayName} - ${partnerName}`,
              description: `Agendamento: ${bookingInfo.bookingDate ? new Date(bookingInfo.bookingDate).toLocaleString('pt-PT') : 'Flexível'}`,
              metadata: {
                booking_id: bookingInfo.bookingId,
                partner_id: bookingInfo.partnerId,
                service_type: bookingInfo.serviceType,
                location: bookingInfo.location,
                duration: bookingInfo.duration
              }
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin") || "http://localhost:3000"}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin") || "http://localhost:3000"}/checkout`,
      payment_intent_data: {
        statement_descriptor: statementDescriptor,
        metadata: {
          booking_id: bookingInfo.bookingId,
          partner_id: bookingInfo.partnerId,
          platform: "connections"
        }
      },
      metadata: {
        booking_id: bookingInfo.bookingId,
        partner_id: bookingInfo.partnerId,
      }
    });
    
    logStep("Created payment session", { sessionId: session.id, url: session.url });
    
    // Optional: Create a record in Supabase using service role key
    // Note: This would require setting up a payment_transactions table
    
    return new Response(JSON.stringify({ url: session.url, sessionId: session.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`[CREATE-PAYMENT] ERROR: ${errorMessage}`);
    
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
