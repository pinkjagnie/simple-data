"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useAuth } from "@/context/AuthContext";

import { TbWorldSearch } from "react-icons/tb";

const Navbar = () => {
  const [dropDownContent, setDropDownContent] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (user) {
      setDropDownContent(true);
    } else if (!user) {
      setDropDownContent(false);
    }
  }, [user]);

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          <TbWorldSearch size={30} />
          World Data
        </Link>
      </div>
      {/* HAMBURGER */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-square btn-ghost">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
          >
            {dropDownContent ? (
              <>
                <li>
                  <div className="avatar font-semibold">
                    <p className="pr-2">Hello, {user.name}</p>
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        width={48}
                        height={48}
                        alt="user avatar"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
