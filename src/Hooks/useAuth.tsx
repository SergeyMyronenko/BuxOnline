import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import Cookies from "js-cookie";

interface AuthContextType {
  url: string;
  token: string | null;
  userId: number;
  setUserId: (id: number) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const url = "https://relaxing-ultimate-chigger.ngrok-free.app";

  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<number>(1);

  useEffect(() => {
    const storedToken = Cookies.get("jwt");
    if (storedToken) {
      setToken(storedToken);
    }

    const interval = setInterval(() => {
      refreshToken();
    }, 14 * 60 * 1000); // Refresh token every 14 minutes

    return () => clearInterval(interval);
  }, []);

  /**
   * Logs in the user by sending a POST request with email and password.
   * Stores the JWT and refresh token in cookies.
   * @param email - User's email
   * @param password - User's password
   */
  const login = async (email: string, password: string) => {
    const raw = JSON.stringify({ email, password });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("ngrok-skip-browser-warning", "69420");
    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(`${url}/auth/jwt/create/`, requestOptions);
    if (response.ok) {
      const result = await response.json();
      setToken(result.access);
      Cookies.set("jwt", result.access, { expires: 1 / 96 }); // 15 minutes
      Cookies.set("refreshToken", result.refresh, { expires: 7 }); // Store refresh token for 7 days
      console.log("successful login");
    } else {
      throw new Error(await response.text());
    }
  };

  /**
   * Refreshes the JWT using the refresh token stored in cookies.
   * Updates the JWT in cookies.
   */
  const refreshToken = async () => {
    const refresh = Cookies.get("refreshToken");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ refresh: refresh });

    const response = await fetch(`${url}/auth/jwt/refresh`, requestOptions);
    if (response.ok) {
      const result = await response.json();
      setToken(result.access);
      Cookies.set("jwt", result.access, { expires: 1 / 96 }); // 15 minutes
      Cookies.set("refreshToken", result.refresh, { expires: 7 }); // Store refresh token for 7 days
      console.log("Token refreshed");
    } else {
      throw new Error(`Login failed: ${await response.text()}`);
    }
  };

  /**
   * Logs out the user by clearing the JWT and refresh token from state and cookies.
   */
  const logout = () => {
    setToken(null);
    Cookies.remove("jwt");
    Cookies.remove("refreshToken");
  };

  return (
    <AuthContext.Provider
      value={{ token, login, logout, refreshToken, url, userId, setUserId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
