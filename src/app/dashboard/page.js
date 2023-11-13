"use client";
// Dashboard.js
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Navbar from "@/components/Navbar";
import ItemForm from "@/components/ItemForm";

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

  const handleAddFoodItem = () => {
    setShowItemForm(true);
  };

  return (
    <div>
      <Navbar onSignOut={handleSignOut} userPhoto={photoURL} />
      <div className="flex flex-col items-center">
        {" "}
        {/* Wrap Welcome and Button in a container */}
        <div className="p-16 text-4xl mb-4">Welcome, {displayName}</div>{" "}
        {/* Apply margin-bottom */}
        <div className="p-16 text-xl">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleAddFoodItem}
          >
            Add Food Item
          </button>
        </div>
        {showItemForm && <ItemForm onClose={() => setShowItemForm(false)} />}
      </div>
    </div>
  );
}
