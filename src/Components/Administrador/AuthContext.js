import React, { useState, useEffect } from "react"
import { firebase } from "../../firebase"

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentuser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentuser);
  }, []);

  return (
    <AuthContext.Provider
    value={{currentUser}}
    >
      {children}
    </AuthContext.Provider>
  )
}