
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/AuthContext';
import { AgeVerificationProvider } from '@/contexts/AgeVerificationContext';
import SecureRoute from '@/components/SecureRoute';

// Import your components
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import UserCompleteProfile from '@/pages/UserCompleteProfile';
import PartnerCompleteProfile from '@/pages/PartnerCompleteProfile';
import Showcase from '@/pages/Showcase';
import BookingSuccess from '@/pages/BookingSuccess';
import Checkout from '@/pages/Checkout';
import AdminLogin from '@/pages/admin/Login';
import AdminDashboardLayout from '@/components/admin/AdminDashboardLayout';
import AdminDashboard from '@/pages/admin/Dashboard';
import UsersPage from '@/pages/admin/UsersPage';
import PartnersPage from '@/pages/admin/PartnersPage';
import ApprovalsPage from '@/pages/admin/ApprovalsPage';
import BookingsPage from '@/pages/admin/BookingsPage';
import PaymentsPage from '@/pages/admin/PaymentsPage';
import StatisticsPage from '@/pages/admin/StatisticsPage';
import PartnerDashboardLayout from '@/components/partner/PartnerDashboardLayout';
import PartnerDashboard from '@/pages/partner/Dashboard';
import PartnerBookingsPage from '@/pages/partner/BookingsPage';
import PartnerMessagesPage from '@/pages/partner/MessagesPage';
import PartnerProfilePage from '@/pages/partner/ProfilePage';
import PartnerFinancesPage from '@/pages/partner/FinancesPage';
import PartnerSettingsPage from '@/pages/partner/SettingsPage';
import PartnerStatisticsPage from '@/pages/partner/StatisticsPage';
import AgeVerificationWrapper from '@/components/AgeVerificationWrapper';
import { ThemeProvider } from '@/components/theme-provider';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import CookiePolicy from '@/pages/CookiePolicy';
import TermsOfUse from '@/pages/TermsOfUse';
import AboutUs from '@/pages/AboutUs';
import License from '@/pages/License';
import Compliance from '@/pages/Compliance';
import HowItWorks from '@/pages/HowItWorks';
import Benefits from '@/pages/Benefits';
import Security from '@/pages/Security';
import FAQ from '@/pages/FAQ';
import Blog from '@/pages/Blog';
import FaleConosco from '@/pages/FaleConosco';
import ProfileTypeSelection from '@/components/ProfileTypeSelection';
import UserRegistration from '@/components/UserRegistration';
import PartnerRegistration from '@/components/PartnerRegistration';

// Novas páginas
import AgeRestriction from '@/pages/AgeRestriction';
import EmailVerification from '@/pages/EmailVerification';
import ResendEmailVerification from '@/pages/ResendEmailVerification';
import AwaitingApproval from '@/pages/partner/AwaitingApproval';

interface AppProps {
  onReady?: () => void;
}

function App({ onReady }: AppProps) {
  // Call the onReady callback when the app is mounted
  React.useEffect(() => {
    if (onReady) onReady();
  }, [onReady]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <AuthProvider>
          <AgeVerificationProvider>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<AgeVerificationWrapper><Index /></AgeVerificationWrapper>} />
              <Route path="/login" element={<AgeVerificationWrapper><Login /></AgeVerificationWrapper>} />
              <Route path="/admin/login" element={<AgeVerificationWrapper><AdminLogin /></AgeVerificationWrapper>} />
              <Route path="/age-restriction" element={<AgeRestriction />} />
              <Route path="/fale-conosco" element={<FaleConosco />} />
              
              {/* Email verification routes */}
              <Route path="/verify-email" element={<EmailVerification />} />
              <Route path="/resend-verification" element={<ResendEmailVerification />} />
              
              {/* Route that requires authentication but not complete profile */}
              <Route path="/showcase" element={
                <SecureRoute>
                  <AgeVerificationWrapper><Showcase /></AgeVerificationWrapper>
                </SecureRoute>
              } />
              
              {/* Registration routes */}
              <Route path="/profile-selection" element={<AgeVerificationWrapper><ProfileTypeSelection /></AgeVerificationWrapper>} />
              <Route path="/register/user" element={<AgeVerificationWrapper><UserRegistration /></AgeVerificationWrapper>} />
              <Route path="/register/partner" element={<AgeVerificationWrapper><PartnerRegistration /></AgeVerificationWrapper>} />
              
              {/* Policy pages */}
              <Route path="/privacidade" element={<PrivacyPolicy />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/termos" element={<TermsOfUse />} />
              <Route path="/sobre" element={<AboutUs />} />
              <Route path="/licenca" element={<License />} />
              <Route path="/compliance" element={<Compliance />} />
              
              {/* User protected routes that require complete profile */}
              <Route path="/complete-profile/user" element={
                <SecureRoute>
                  <AgeVerificationWrapper><UserCompleteProfile /></AgeVerificationWrapper>
                </SecureRoute>
              } />
              <Route path="/checkout" element={
                <SecureRoute requireCompleteProfile>
                  <AgeVerificationWrapper><Checkout /></AgeVerificationWrapper>
                </SecureRoute>
              } />
              <Route path="/booking-success" element={
                <SecureRoute requireCompleteProfile>
                  <AgeVerificationWrapper><BookingSuccess /></AgeVerificationWrapper>
                </SecureRoute>
              } />
              
              {/* Partner protected routes */}
              <Route path="/partner/complete-profile" element={
                <SecureRoute>
                  <AgeVerificationWrapper><PartnerCompleteProfile /></AgeVerificationWrapper>
                </SecureRoute>
              } />
              <Route path="/partner/awaiting-approval" element={
                <SecureRoute>
                  <AgeVerificationWrapper><AwaitingApproval /></AgeVerificationWrapper>
                </SecureRoute>
              } />
              <Route path="/partner" element={
                <SecureRoute>
                  <PartnerDashboardLayout />
                </SecureRoute>
              }>
                <Route path="" element={<PartnerDashboard />} />
                <Route path="bookings" element={<PartnerBookingsPage />} />
                <Route path="messages" element={<PartnerMessagesPage />} />
                <Route path="profile" element={<PartnerProfilePage />} />
                <Route path="finances" element={<PartnerFinancesPage />} />
                <Route path="settings" element={<PartnerSettingsPage />} />
                <Route path="statistics" element={<PartnerStatisticsPage />} />
              </Route>
              
              {/* Admin protected routes */}
              <Route path="/admin" element={
                <SecureRoute requireAdmin>
                  <AdminDashboardLayout />
                </SecureRoute>
              }>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="partners" element={<PartnersPage />} />
                <Route path="approvals" element={<ApprovalsPage />} />
                <Route path="bookings" element={<BookingsPage />} />
                <Route path="payments" element={<PaymentsPage />} />
                <Route path="statistics" element={<StatisticsPage />} />
              </Route>

              {/* New content pages */}
              <Route path="/como-funciona" element={<HowItWorks />} />
              <Route path="/beneficios" element={<Benefits />} />
              <Route path="/seguranca" element={<Security />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              
              {/* Redirect for old path */}
              <Route path="/complete-profile" element={<Navigate to="/complete-profile/user" replace />} />
            </Routes>
            <Toaster />
          </AgeVerificationProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
