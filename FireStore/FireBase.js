import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {getAuth, signInWithEmailAndPassword,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {getFirestore,addDoc, collection,getDocs,doc, deleteDoc,getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";  //initilize firestore

const firebaseConfig = {
  apiKey: "AIzaSyBd5jmwMT88IUjy1Fuui6Nn-cY8PoQZssk",
  authDomain: "fb-class-project.firebaseapp.com",
  projectId: "fb-class-project",
  storageBucket: "fb-class-project.appspot.com",
  messagingSenderId: "14770808028",
  appId: "1:14770808028:web:6d9fc6479c4bdd2c484019",
  measurementId: "G-W5L48RBYQQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dataBase=getFirestore(app);    //connect app with firestore

export{auth, signInWithEmailAndPassword,onAuthStateChanged,signOut,dataBase,addDoc, collection,getDocs,doc, deleteDoc,getDoc,updateDoc }
