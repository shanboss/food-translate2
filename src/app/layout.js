import { Inter } from "next/font/google";
import "./globals.css";
import { FirebaseProvider } from "./useFirebase";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food Translator",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <FirebaseProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </FirebaseProvider>
  );
}
