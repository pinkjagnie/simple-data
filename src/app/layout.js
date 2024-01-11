import AuthContextProvider from "./AuthContextProvider";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "World Data",
  description:
    "World Data is a place where you have access to the most up-to-date data and information on the most important markets and stock exchanges in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </AuthContextProvider>
    </html>
  );
}
