// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth,GoogleAuthProvider,sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { Auth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmMygDWAG_K0Bh-xYTP_TAKp8LmJ6dyCk",
  authDomain: "cvvh-dam-sen.firebaseapp.com",
  projectId: "cvvh-dam-sen",
  storageBucket: "cvvh-dam-sen.appspot.com",
  messagingSenderId: "731658362341",
  appId: "1:731658362341:web:afe8a4ebb1e066ef54630c",
  measurementId: "G-JXM3F0Z1L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const firestore = getFirestore(app);
const storage = getStorage(app);
export {storage};
