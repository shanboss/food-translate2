"use client";
// Dashboard.js
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Navbar from "@/components/Navbar";
import AddItemButton from "@/components/AddItemButton";

export default function Dashboard() {
  const router = useRouter();
  const [displayName, setdisplayName] = useState(null);
  const [photoURL, setUserPhoto] = useState(null);
  const [showItemForm, setShowItemForm] = useState(false);
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const loadDisplayPhoto = async function () {
      if (auth?.currentUser) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        setUserPhoto(userData?.photoURL);
      }
    };

    const loadDisplayName = async function () {
      if (auth?.currentUser) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
        setdisplayName(userData?.displayName);
      }
    };

    loadDisplayPhoto();
    loadDisplayName();
  }, [auth]);

  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      router.push("/");
    });
  };
  return (
    <div>
      <Navbar onSignIn={null} onSignOut={handleSignOut} userPhoto={photoURL} />
      <div className="flex flex-col items-center">
        {" "}
        <div className="p-6 text-4xl mb-4">Welcome, {displayName}</div>{" "}
        <AddItemButton ButtonLabel="Add your favorite food item" />
        <AddItemButton ButtonLabel="Add your favorite cuisine " />
        <AddItemButton ButtonLabel="Add some dietary restrictions" />
      </div>
    </div>
  );
}
