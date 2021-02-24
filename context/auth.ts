import { createContext } from "react";

const AuthContext = createContext(null);

AuthContext.displayName = "AuthContext";

export const AuthProvider = AuthContext.Provider;

export default AuthContext;
