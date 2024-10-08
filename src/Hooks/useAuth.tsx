import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
    url:string;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    refreshToken: () => Promise<void>;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
/**
 * AuthProvider component that provides authentication context to its children.
 * 
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components that will have access to the authentication context.
 * 
 * @returns {JSX.Element} The AuthProvider component.
 * 
 * @example
 * ```tsx
 * <AuthProvider>
 *   <YourComponent />
 * </AuthProvider>
 * ```
 * 
 * @remarks
 * This component uses cookies to store JWT tokens and handles token refresh every 14 minutes.
 * 
 * @function
 * @name AuthProvider
 * 
 * @description
 * The AuthProvider component manages authentication state and provides methods for logging in, logging out, and refreshing tokens.
 * 
 * @typedef {Object} AuthContextValue
 * @property {string | null} token - The current JWT token.
 * @property {Function} login - Function to log in a user with email and password.
 * @property {Function} logout - Function to log out the current user.
 * @property {Function} refreshToken - Function to refresh the JWT token using the refresh token.
 * 
 * @hook
 * @name useAuth
 * 
 * @example
 * ```tsx
 * const { token, login, logout, refreshToken } = useAuth();
 * ```
 */
const AuthProvider = ({ children }: { children: ReactNode }) => {
    // const url='http://127.0.0.1:8000';
    const url='https://glowing-boa-definite.ngrok-free.app';

    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = Cookies.get('jwt');
        if (storedToken) {
            setToken(storedToken);
        }

        const interval = setInterval(() => {
            refreshToken();
        }, 14 * 60 * 1000); // Refresh token every 14 minutes

        return () => clearInterval(interval);
    }, []);

    const login = async (email: string, password: string) => {
        const raw = JSON.stringify({ email, password });

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("ngrok-skip-browser-warning", "69420");
        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(`${url}/auth/jwt/create/`, requestOptions);
        if (response.ok) {
            const result = await response.json();
            setToken(result.access);
            Cookies.set('jwt', result.access, { expires: 1 / 96 }); // 15 minutes
            Cookies.set('refreshToken', result.refresh, { expires: 7 }); // Store refresh token for 7 days
            console.log("successfull login");
        } else {
            throw new Error(`Login failed: ${await response.text()}`);
        }

    };

    const refreshToken = async () => {
        const refresh = Cookies.get('refreshToken');
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "refresh": refresh
        });

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(`${url}/auth/jwt/refresh`, requestOptions);
        if (response.ok) {
            const result = await response.json();
            setToken(result.access);
            Cookies.set('jwt', result.access, { expires: 1 / 96 }); // 15 minutes
            Cookies.set('refreshToken', result.refresh, { expires: 7 }); // Store refresh token for 7 days
            console.log('Token refreshed');
            // console.log(result);
        } else {
            throw new Error(`Login failed: ${await response.text()}`);
        }
    };

    const logout = () => {
        setToken(null);
        Cookies.remove('jwt');
        Cookies.remove('refreshToken');
    };

    return (
        <AuthContext.Provider value={{ token, login, logout, refreshToken,url }}>
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