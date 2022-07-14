import * as firebase from "firebase/app";
// import { doc, getDoc } from "firebase/firestore";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiQXKmHP5JJVphDI59aQVWQ7uBXnBnZOM",
  authDomain: "todovai-48113.firebaseapp.com",
  projectId: "todovai-48113",
  storageBucket: "todovai-48113.appspot.com",
  messagingSenderId: "115358695736",
  appId: "1:115358695736:web:821c428b2a5c71f8bd01cd",
  measurementId: "G-62GHSLMNTP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

var db = getFirestore(firebaseApp);

export default db;
