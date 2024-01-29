import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDRQ7hbuS7x5QpE6fagMuAA5QPfOIksDIM",
    authDomain: "csv-uploader-c2d1c.firebaseapp.com",
    projectId: "csv-uploader-c2d1c",
    storageBucket: "csv-uploader-c2d1c.appspot.com",
    messagingSenderId: "946999660484",
    appId: "1:946999660484:web:3881e7189c1e444079de91"
  };
      

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);