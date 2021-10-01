import { initializeApp } from "firebase/app";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { ref, getDatabase, child, get, onValue } from "firebase/database";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestoredb = getFirestore(app);

export default app;
export {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
  getAuth,
  ref as dbRef,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  child,
  get,
  database,
  onValue,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  firestoredb,
};
