/**
 * Entry point of the React application.
 * 
 * This file sets up the React application by rendering the root component into the DOM.
 * It uses StrictMode for highlighting potential problems in the application and BrowserRouter
 * for enabling client-side routing.
 * 
 * Imports:
 * - StrictMode: A tool for highlighting potential problems in an application.
 * - createRoot: A method from 'react-dom/client' for creating a root to render the React component tree.
 * - BrowserRouter: A component from 'react-router-dom' for enabling client-side routing.
 * - App: The root component of the application.
 * 
 * The application is rendered into the DOM element with the id 'root'.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from './App.jsx'
import { AuthProvider } from '../src/Hooks/useAuth.tsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </StrictMode>
  </AuthProvider>
)
