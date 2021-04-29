import React, { useState, useEffect, useContext, createContext } from "react";
import { signIn, signOut } from '../services/authentication-service';
import { auth } from '../firebase/firebase';
import {
  useHistory
} from "react-router-dom";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  let history = useHistory();
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
      localStorage.setItem('oplay_user', JSON.stringify(user));
      history.push('/dashboard');
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
        localStorage.setItem('oplay_user', JSON.stringify(user));
      } else {
        setUser(false);
        localStorage.removeItem('oplay_user')
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