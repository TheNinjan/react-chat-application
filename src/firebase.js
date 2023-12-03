import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEzqqetfZcTrj5oQgqb2EFHyclW5X9XZo",
  authDomain: "chatvista1.firebaseapp.com",
  projectId: "chatvista1",
  storageBucket: "chatvista1.appspot.com",
  messagingSenderId: "650747064413",
  appId: "1:650747064413:web:98f26208caae0520e51db4"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDv7VyojEA1c64qVTwOfJEJ9VrxYAbC-P8",
//   authDomain: "dialogease.firebaseapp.com",
//   databaseURL: "https://dialogease-default-rtdb.firebaseio.com",
//   projectId: "dialogease",
//   storageBucket: "dialogease.appspot.com",
//   messagingSenderId: "750843659205",
//   appId: "1:750843659205:web:73af90a5b2334d562c41ac"
// };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()