import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface SecureRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
  requireCompleteProfile?: boolean;
}

const SecureRoute: React.FC<SecureRouteProps> = ({ 
  children, 
  requireAuth = true, 
  requireAdmin = false,
  requireCompleteProfile = false 
}) => {
  const { isLoaded, isSignedIn, user } = useAuth();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-white">Carregando...</div>
      </div>
    );
  }

  if (requireAuth && !isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && (!user || user.role !== 'admin')) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export default SecureRoute;
