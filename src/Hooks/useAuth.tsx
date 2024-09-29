import React, { createContext, useState, useContext, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
/**
 * AuthProvider component that provides authentication context to its children.
 * This token will be awailable throughout the entire applia
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components that will have access to the authentication context.
 *
 * @returns {JSX.Element} The AuthContext.Provider component wrapping the children.
 *
 * @example
 * ```tsx
 * <AuthProvider>
 *   <YourComponent />
 * </AuthProvider>
 * ```
 *
 * @remarks
 * This component uses a state hook to manage the authentication token and provides it via context to its children.
 */
const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };