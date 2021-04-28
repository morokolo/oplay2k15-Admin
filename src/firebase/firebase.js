import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBaHMB666HGiPpezGx_oEtZT3ebAoxU3EY",
  authDomain: "oplay-531f9.firebaseapp.com",
  projectId: "oplay-531f9",
  storageBucket: "oplay-531f9.appspot.com",
  messagingSenderId: "392630574899",
  appId: "1:392630574899:web:27bd77b45ae60a472de846",
  measurementId: "G-BQHYC2LZWR"
});



const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }