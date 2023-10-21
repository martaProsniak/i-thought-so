// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQxz0hqGbSVwLnrStn3sjzU70Q6AsKUo0",
  authDomain: "i-thoughtso.firebaseapp.com",
  databaseURL:
    "https://i-thoughtso-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "i-thoughtso",
  storageBucket: "i-thoughtso.appspot.com",
  messagingSenderId: "690271175149",
  appId: "1:690271175149:web:999beffa01af5ffac1e7e4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
