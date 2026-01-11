// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo12Gptm9edLsCrsB-A29yBtA3IipUq6w",
  authDomain: "tp12-99f9c.firebaseapp.com",
  projectId: "tp12-99f9c",
  storageBucket: "tp12-99f9c.firebasestorage.app",
  messagingSenderId: "756353741418",
  appId: "1:756353741418:web:128bc25865582b5ee9d013",
  measurementId: "G-MDC1RPEEVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);