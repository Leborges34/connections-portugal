
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext'

// Add the onReady event to Window interface
declare global {
  interface Window {
    hideInitialLoader?: () => void;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)

setTimeout(() => {
  if (typeof window !== 'undefined' && window.hideInitialLoader) {
    window.hideInitialLoader();
  }
}, 100); // Small delay to ensure React has mounted
