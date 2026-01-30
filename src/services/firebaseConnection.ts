import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAP8DUd0GEMqDpC8qdYdLHHKzmnm3Jn_pY",
  authDomain: "reactlinks-461f0.firebaseapp.com",
  projectId: "reactlinks-461f0",
  storageBucket: "reactlinks-461f0.firebasestorage.app",
  messagingSenderId: "169478692056",
  appId: "1:169478692056:web:5c34024469e517a971cbad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };