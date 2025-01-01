// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-27414.firebaseapp.com",
  projectId: "mern-auth-27414",
  storageBucket: "mern-auth-27414.firebasestorage.app",
  messagingSenderId: "213793107109",
  appId: "1:213793107109:web:a6f1697d37ed2bfffcf14c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);