import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'user' | 'partner' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isLoaded: boolean;
  isSignedIn: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (userData: Omit<User, 'id'> & { password: string }) => Promise<boolean>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user');
    const storedToken = localStorage.getItem('auth_token');
    
    if (storedUser && storedToken) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
        setIsSignedIn(true);
      } catch (error) {
        localStorage.removeItem('auth_user');
        localStorage.removeItem('auth_token');
      }
    }
    setIsLoaded(true);
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      let userData: User;
      
      if (email === 'admin@connections.com' && password === 'admin123') {
        userData = {
          id: 'admin-1',
          firstName: 'Admin',
          lastName: 'User',
          email: 'admin@connections.com',
          role: 'admin'
        };
      } else if (email === 'demo@user.com' && password === 'demo123') {
        userData = {
          id: 'user-1',
          firstName: 'Demo',
          lastName: 'User',
          email: 'demo@user.com',
          role: 'user'
        };
      } else if (email === 'demo@partner.com' && password === 'demo123') {
        userData = {
          id: 'partner-1',
          firstName: 'Demo',
          lastName: 'Partner',
          email: 'demo@partner.com',
          role: 'partner'
        };
      } else {
        return false;
      }

      localStorage.setItem('auth_user', JSON.stringify(userData));
      localStorage.setItem('auth_token', 'mock-jwt-token');
      setUser(userData);
      setIsSignedIn(true);
      return true;
    } catch (error) {
      return false;
    }
  };

  const signUp = async (userData: Omit<User, 'id'> & { password: string }): Promise<boolean> => {
    try {
      const newUser: User = {
        id: `${userData.role}-${Date.now()}`,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        role: userData.role
      };

      localStorage.setItem('auth_user', JSON.stringify(newUser));
      localStorage.setItem('auth_token', 'mock-jwt-token');
      setUser(newUser);
      setIsSignedIn(true);
      return true;
    } catch (error) {
      return false;
    }
  };

  const signOut = async () => {
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_token');
    setIsSignedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoaded, isSignedIn, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
