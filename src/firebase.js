import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEzqqetfZcTrj5oQgqb2EFHyclW5X9XZo",
  authDomain: "chatvista1.firebaseapp.com",
  projectId: "chatvista1",
  storageBucket: "chatvista1.appspot.com",
  messagingSenderId: "650747064413",
  appId: "1:650747064413:web:98f26208caae0520e51db4"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()