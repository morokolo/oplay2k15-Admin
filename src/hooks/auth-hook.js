import React, { useState, useEffect, useContext, createContext } from "react";
import { signIn, signOut } from '../services/authentication-service';
import { auth } from '../firebase/firebase';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signin = (email, password) => {
    if (!email || !password) {
      const errorMessage = 'Please Provide Email and Password';
      setError(errorMessage)
      return;
    }

    return signIn(email, password).then((userCredential) => {
      const { uid, refreshToken, email, displayName } = userCredential.user
      setUser({ uid, refreshToken, email, displayName });
    }).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
  };

  const signout = () => {
    return signOut()
      .then(() => {
        setUser(false);
        setError(null)
        localStorage.clear();
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    error,
    signin,
    signout,
  };
}