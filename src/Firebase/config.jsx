import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAN1d-D6eEJzRb6mAID3dhsn33PE-O-JRM",
    authDomain: "olx-clone-d6902.firebaseapp.com",
    projectId: "olx-clone-d6902",
    storageBucket: "olx-clone-d6902.appspot.com",
    messagingSenderId: "954911006314",
    appId: "1:954911006314:web:f6f6a46bc4c280159e3413",
    measurementId: "G-ZQXQD4N7HR"
  };

export default firebase.initializeApp(firebaseConfig)