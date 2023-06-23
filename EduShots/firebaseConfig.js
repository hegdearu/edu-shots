import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
import {getStorage,ref} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCXD9bdKGw0GyKHaP-oQBYDX3Eirhbi0Sg",
    authDomain: "edushots-36bee.firebaseapp.com",
    projectId: "edushots-36bee",
    storageBucket: "gs://edushots-36bee.appspot.com",
    messagingSenderId: "646199540703",
    appId: "1:646199540703:web:cd18c0ebfcaddf7aece26a",
    measurementId: "G-D13D8SXQY8"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage();

