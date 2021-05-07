import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
    apiKey: "AIzaSyDVKloKA3qM9xfoJtbVUN-hYkV4jFca2mU",
    authDomain: "personal-website-cd38c.firebaseapp.com",
    projectId: "personal-website-cd38c",
    storageBucket: "personal-website-cd38c.appspot.com",
    messagingSenderId: "210405552379",
    appId: "1:210405552379:web:747c1d3bd91440b20b805e",
    measurementId: "G-EP9BR54GYG"
  });

  export const db = firebase.firestore();
  export default app
