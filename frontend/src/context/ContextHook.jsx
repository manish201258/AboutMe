import React, { createContext, useContext, useState,useEffect } from 'react';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [mode,setMode] = useState(false)

  const changeMode=()=>{
    setMode(!mode);
  }

  return (
  <AuthContext.Provider value={{ mode,changeMode }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
