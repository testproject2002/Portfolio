// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmsel-gtkg3EFQ9pB8wVqAIXlxQ4XdHLQ",
    authDomain: "gp-portfolio-160c8.firebaseapp.com",
    projectId: "gp-portfolio-160c8",
    storageBucket: "gp-portfolio-160c8.appspot.com",
    messagingSenderId: "940103107320",
    appId: "1:940103107320:web:14f81c22cab35e8a04710d",
    measurementId: "G-CGQ3995T01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);