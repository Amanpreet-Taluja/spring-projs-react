import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB63bUju_tnZXTDS5coBGqE_eYzshSYr9s",
  authDomain: "whatsapp-clone-d02bb.firebaseapp.com",
  projectId: "whatsapp-clone-d02bb",
  storageBucket: "whatsapp-clone-d02bb.appspot.com",
  messagingSenderId: "409746394169",
  appId: "1:409746394169:web:f78f3772eb74c87f2111e8",
  measurementId: "G-KJDY2X3DXK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
