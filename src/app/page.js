"use client";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Home() {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  return (
    <div>
      <button onClick={() => signInWithPopup(auth, googleProvider)}>
        Sign In with Google
      </button>
    </div>
  );
}
