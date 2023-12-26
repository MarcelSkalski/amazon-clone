import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcGjtGurCJj64NmuRCYxn-IsY9O1Nt7BQ",
  authDomain: "clone-9ba89.firebaseapp.com",
  projectId: "clone-9ba89",
  storageBucket: "clone-9ba89.appspot.com",
  messagingSenderId: "314813117882",
  appId: "1:314813117882:web:c358b1ff2781f501879983",
  measurementId: "G-GSVH0SCRBL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
