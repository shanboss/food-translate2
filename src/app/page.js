"use client";

import Navbar from "@/components/Navbar";
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

  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      router.push("/");
    });
  };

  return (
    <div className="bg-slate-950">
      <Navbar onSignIn={signInWithGoogle} onSignOut={handleSignOut} />
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="max-w-md p-8 bg-slate-900 shadow-md rounded-md">
          <div className="text-2xl text-white font-extrabold text-center mb-6">
            Create an Account or Log In
          </div>

          <button
            onClick={signInWithGoogle}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
}
