"use client";

import Image from "next/image";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Home() {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  signInWithPopup(auth, googleProvider);
  return (
    <div>
      <button onClick={signInWithPopup}>Sign In with Google</button>
    </div>
  );
}
