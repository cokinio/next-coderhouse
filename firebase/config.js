// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_4nD_acG8d8uDXm-dBqlgFcE-anMzMu0",
  authDomain: "next-coder-403b4.firebaseapp.com",
  projectId: "next-coder-403b4",
  storageBucket: "next-coder-403b4.appspot.com",
  messagingSenderId: "607394321456",
  appId: "1:607394321456:web:e2ae9b941564a195ec09f5"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()