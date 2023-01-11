import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACy07NY5or_3IlSKOEeiVY6axe6cwBWwk",
  authDomain: "compralibre-5cbab.firebaseapp.com",
  projectId: "compralibre-5cbab",
  storageBucket: "compralibre-5cbab.appspot.com",
  messagingSenderId: "777558571854",
  appId: "1:777558571854:web:4fccbc366731ceb31f7c1f",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
