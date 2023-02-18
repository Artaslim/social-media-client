import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  getAuth,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadin, setLoadin] = useState(true);
  const createUser = (email, password) => {
    setLoadin(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoadin(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoadin(true);
    return signOut(auth);
  };
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth observing");
      setUser(currentUser);
      setLoadin(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = { createUser, signIn, user, logOut, updateUser, loadin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
