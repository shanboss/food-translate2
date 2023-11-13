// ItemForm.js
import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  getFirestore,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
const db = getFirestore();

const ItemForm = ({ onClose }) => {
  const [foodItemName, setFoodItemName] = useState("");

  const handleFoodItemNameChange = (e) => {
    setFoodItemName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save food item to Firebase
    const auth = getAuth();
    if (auth?.currentUser) {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      const foodItemsCollectionRef = collection(userDocRef, "foodItems");

      await addDoc(foodItemsCollectionRef, {
        name: foodItemName,
        timestamp: serverTimestamp(),
      });
    }

    // Close the form
    onClose();
  };

  return (
    <div className="px-8">
      <form onSubmit={handleSubmit}>
        <label className="text-black px-8">
          <input
            type="text"
            placeholder="Food Item"
            value={foodItemName}
            onChange={handleFoodItemNameChange}
            className="text-white bg-slate-950 rounded-md border border-gray-50 p-2" // Set text color to black
          />
        </label>
        <button type="submit">Add Food Item</button>
      </form>
    </div>
  );
};

export default ItemForm;
