import { auth } from '../firebase/firebase';

export const login = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password)
}

export const register = async (email, password) => {
  return await auth.createUserWithEmailAndPassword(email, password)
}