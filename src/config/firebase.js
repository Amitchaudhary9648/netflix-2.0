import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTrsVAcbudyh0mq1j8gJKvRgBI1rPQqaQ",
    authDomain: "netflix-f420e.firebaseapp.com",
    projectId: "netflix-f420e",
    storageBucket: "netflix-f420e.appspot.com",
    messagingSenderId: "452359394907",
    appId: "1:452359394907:web:456a58ee4ae376dd64917e"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };