// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCATYlj-hnqjWHQVaGI_5agLMuyTsDDyVU",
  authDomain: "movieflixgpt-5e4e8.firebaseapp.com",
  projectId: "movieflixgpt-5e4e8",
  storageBucket: "movieflixgpt-5e4e8.appspot.com",
  messagingSenderId: "125792621395",
  appId: "1:125792621395:web:f6eead7e31949f84d587a6",
  measurementId: "G-3FD5XSCVDP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
