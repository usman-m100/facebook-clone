// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALx7rINXtqVWZXopAvrPhQ1QT1EwRgYqM",
  authDomain: "facebookclone-c448a.firebaseapp.com",
  projectId: "facebookclone-c448a",
  storageBucket: "facebookclone-c448a.appspot.com",
  messagingSenderId: "39281294924",
  appId: "1:39281294924:web:f234a9f74db04cde39bee9",
  measurementId: "G-GQF20570M1"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

