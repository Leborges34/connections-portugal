import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md">
        <SignIn 
          appearance={{
            baseTheme: undefined,
            variables: {
              colorPrimary: '#00FF66',
            },
          }}
          redirectUrl="/showcase"
        />
      </div>
    </div>
  );
};

export default Login;
