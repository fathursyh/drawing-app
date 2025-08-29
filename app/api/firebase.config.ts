// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCKHdFDLbtsMIKuN3lwHNaZP1PpnqaupK8",
  authDomain: "drawing-app-react.firebaseapp.com",
  projectId: "drawing-app-react",
  storageBucket: "drawing-app-react.firebasestorage.app",
  messagingSenderId: "468883304994",
  appId: "1:468883304994:web:71075c1ce535827da0907b",
  measurementId: "G-6PH8Z6M8Z6",
  databaseURL: 'https://drawing-app-react-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);