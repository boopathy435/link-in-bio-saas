import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA3L2HIGPBijvb4ONndYWGgeM9tIWGvpg",
  authDomain: "linkinbio-c24d2.firebaseapp.com",
  projectId: "linkinbio-c24d2",
  storageBucket: "linkinbio-c24d2.firebasestorage.app",
  messagingSenderId: "506336660071",
  appId: "1:506336660071:web:8fec7eb22da6279ba462c2",
  measurementId: "G-99W35H46ZT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();