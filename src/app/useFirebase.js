"use client";

const { createContext } = require("react");
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7V6wwJZ_7TF8lNyGO3nwM87SagmWl_Ps",
  authDomain: "food-translate-3aba3.firebaseapp.com",
  projectId: "food-translate-3aba3",
  storageBucket: "food-translate-3aba3.appspot.com",
  messagingSenderId: "548974436864",
  appId: "1:548974436864:web:2998ce91add5312b53eee5",
  measurementId: "G-3EEMYEMC16",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, () => {
  console.log("It is running");
  if (auth?.currentUser) {
    const { uid, displayName, photoURL } = auth.currentUser;
    const userRef = doc(db, "users", uid);
    setDoc(
      userRef,
      {
        displayName,
        photoURL,
      },
      { merge: true }
    );
  }
});

const FirebaseContext = createContext();

export const FirebaseProvider = function ({ children }) {
  return (
    <FirebaseContext.Provider value={app}>{children}</FirebaseContext.Provider>
  );
};
