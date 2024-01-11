"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

import Link from "next/link";

const Hero = () => {
  const [buttonContent, setButtonContent] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setButtonContent(true);
    } else if (!user) {
      setButtonContent(false);
    }
  }, [user]);

  return (
    <div className="hero min-h-screen heroBg">
      <div className="hero-overlay bg-stone-900/90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to World Data</h1>
          <p className="mb-5">
            The World Data is a place where you have access to the most
            up-to-date data and information on the most important markets and
            stock exchanges in the world
          </p>
          {buttonContent ? null : (
            <Link href="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
