import { createContext, useState } from "react";

export const auth = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
