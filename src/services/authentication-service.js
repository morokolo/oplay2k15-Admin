import { auth } from '../firebase/firebase';

export const signIn = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password)
}

export const signUp = async (email, password) => {
  return await auth.createUserWithEmailAndPassword(email, password)
}

export const signOut = async () => {
  return await auth.signOut()
}
