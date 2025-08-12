// src/auth/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
    const saved = localStorage.getItem("Libricito_user");
    if (saved) setUser(JSON.parse(saved));
    }, []);

    const login = (u) => { setUser(u); localStorage.setItem("Libricito_user", JSON.stringify(u)); };
    const logout = () => { setUser(null); localStorage.removeItem("Libricito_user"); };

    return <AuthCtx.Provider value={{ user, login, logout }}>{children}</AuthCtx.Provider>;
}
export const useAuth = () => useContext(AuthCtx);
