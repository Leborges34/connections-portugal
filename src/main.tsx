
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LoadingProvider } from './contexts/LoadingContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css';

// Create a client
const queryClient = new QueryClient();

// Let the app know when it's fully loaded
const onAppReady = () => {
  if (window.hideInitialLoader) {
    window.hideInitialLoader();
  }
};

// Add the onReady event to Window interface
declare global {
  interface Window {
    hideInitialLoader?: () => void;
  }
}

const clerkPubKey = (import.meta as any).env?.VITE_CLERK_PUBLISHABLE_KEY || 'pk_test_placeholder';

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <App onReady={onAppReady} />
      </LoadingProvider>
    </QueryClientProvider>
  </ClerkProvider>
);
