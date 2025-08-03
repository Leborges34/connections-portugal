import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const AdminLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">Admin Login</h1>
        </div>
        <SignIn 
          appearance={{
            baseTheme: undefined,
            variables: {
              colorPrimary: '#00FF66',
            },
          }}
          redirectUrl="/admin/dashboard"
        />
      </div>
    </div>
  );
};

export default AdminLogin;
