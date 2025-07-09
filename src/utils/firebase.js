// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSprjaoGiDEKeiiZYwr3FHkOwCe3-rhTI",
    authDomain: "netflixgpt-e770e.firebaseapp.com",
    projectId: "netflixgpt-e770e",
    storageBucket: "netflixgpt-e770e.firebasestorage.app",
    messagingSenderId: "818515384335",
    appId: "1:818515384335:web:a177a8d080e2e16fd42b7a",
    measurementId: "G-G2Y44CZ7GQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

export const FIREBASE_AUTH_ERROR_CODES = {
    CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
    EMAIL_EXISTS: "auth/email-already-in-use",
    INVALID_EMAIL: "auth/invalid-email",
    INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential"
} 