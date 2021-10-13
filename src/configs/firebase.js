
import { initializeApp } from "firebase/app";
import {getAuth, getAnalytics,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAARdch-ANZHWXNe_JoiZ-egsUORLs6LsU",
  authDomain: "testing-9c889.firebaseapp.com",
  projectId: "testing-9c889",
  storageBucket: "testing-9c889.appspot.com",
  messagingSenderId: "729086942019",
  appId: "1:729086942019:web:bcf57b8cf4aee835642df6",
  measurementId: "G-H0BDMCC926"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore ();

export {
    auth,
  createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,


    db

};
