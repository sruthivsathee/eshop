import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX5G6pTLexG4vW7_EHwxeAdavkLblxtyI",
  authDomain: "eshop-52cbc.firebaseapp.com",
  projectId: "eshop-52cbc",
  storageBucket: "eshop-52cbc.appspot.com",
  messagingSenderId: "382139482915",
  appId: "1:382139482915:web:7d6709b04f7bca424ac296",
  measurementId: "G-MN9F8SXLLQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };
