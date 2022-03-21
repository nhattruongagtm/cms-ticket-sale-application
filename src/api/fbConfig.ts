// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhmJJfqmq8GpJvXtChGVsvPWdvjldszIc",
  authDomain: "cms-ticket-sale-applicat-e5170.firebaseapp.com",
  projectId: "cms-ticket-sale-applicat-e5170",
  storageBucket: "cms-ticket-sale-applicat-e5170.appspot.com",
  messagingSenderId: "508262077423",
  appId: "1:508262077423:web:4290071624484dd35b9c1a",
  measurementId: "G-XWK6JPX1QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

