// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzzZmnPgtkRvAc3SykgIHgEsQDDsTlV6U",
  authDomain: "water-quality-monitoring-vyd.firebaseapp.com",
  projectId: "water-quality-monitoring-vyd",
  storageBucket: "water-quality-monitoring-vyd.appspot.com",
  messagingSenderId: "715559720425",
  appId: "1:715559720425:web:a854c8fe38cf8912dae778",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
