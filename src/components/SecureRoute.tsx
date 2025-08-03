import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface SecureRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

const SecureRoute: React.FC<SecureRouteProps> = ({ children, requireAuth = true }) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (requireAuth && !isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default SecureRoute;
