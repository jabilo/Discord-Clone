// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { GoogleAuthProvider, signInWithPopup,getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5up3wenKtzQhk_gyfSyF0bY7K8liNEy8",
  authDomain: "discord-clone-yt-2192f.firebaseapp.com",
  projectId: "discord-clone-yt-2192f",
  storageBucket: "discord-clone-yt-2192f.appspot.com",
  messagingSenderId: "787344886277",
  appId: "1:787344886277:web:359d03b0ec3f201f9a2a6c",
  measurementId: "G-DZ6E1G07RG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db =  firebase.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {auth,provider};
export default db;

