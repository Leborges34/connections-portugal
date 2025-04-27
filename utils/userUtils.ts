
import { supabase } from '@/integrations/supabase/client';

export async function findUserByEmail(email: string) {
  try {
    // For client-side user lookup, we need to use a different approach
    // since we can't use admin methods directly
    
    // This will work if the user is calling this function to find themselves
    const { data: authData } = await supabase.auth.getSession();
    
    if (authData?.session?.user?.email === email) {
      return authData.session.user;
    }
    
    // For finding other users, we would need a server function with admin privileges
    console.warn('Aviso: Buscar usuários por email requer privilégios de admin no backend');
    console.info('Email procurado:', email);
    
    return null;
  } catch (error) {
    console.error('Erro inesperado:', error);
    return null;
  }
}
