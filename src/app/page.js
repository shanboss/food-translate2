"use client";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();

  const signInWithGoogle = async function () {
    await signInWithPopup(auth, googleProvider).then(() => {
      router.push("/dashboard");
    });
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}
