// src/main.jsx
import React from 'react';
import './index.css';
import App from './App.jsx';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext.jsx';
import { ClerkProvider } from '@clerk/clerk-react'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
              <AppProvider>
                  <App />
              </AppProvider>
          </ClerkProvider>
      </BrowserRouter>
  </React.StrictMode>,
);
