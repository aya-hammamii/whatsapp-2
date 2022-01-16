
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCnI-3wlXzlduTW6QtfDR4r5BNvkpeznA0",
    authDomain: "whatsapp-2-2a28a.firebaseapp.com",
    projectId: "whatsapp-2-2a28a",
    storageBucket: "whatsapp-2-2a28a.appspot.com",
    messagingSenderId: "1025162819613",
    appId: "1:1025162819613:web:96c52f835c8ee46a3d2ef4"
  };


  
const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth,provider };