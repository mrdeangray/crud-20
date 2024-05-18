import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setCurrUser(u));
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    signInWithPopup(auth, googleProvider);
  };

  const handleSignOut = async () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ currUser, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
