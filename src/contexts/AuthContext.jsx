import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null
  });

  const login = (userData) => {
    setAuthState({
      isAuthenticated: true,
      user: userData,
    });
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null
    });
  };

  const checkAuth = () => {
    return authState.isAuthenticated;
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};