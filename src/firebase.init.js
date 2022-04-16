// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZajLByn9QXlDuo1a-VE9Ta51jnwiI52Q",
    authDomain: "canun-app.firebaseapp.com",
    projectId: "canun-app",
    storageBucket: "canun-app.appspot.com",
    messagingSenderId: "823555786948",
    appId: "1:823555786948:web:9463e42fc87585738c2191",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
