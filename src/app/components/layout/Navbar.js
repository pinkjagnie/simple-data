"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useAuth } from "@/context/AuthContext";

import { TbWorldSearch } from "react-icons/tb";

import Drawer from "./Drawer";

const Navbar = () => {
  const [dropDownContent, setDropDownContent] = useState(false);
  const { user, logout } = useAuth();

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (prevState) => setOpenDrawer(!prevState);

  useEffect(() => {
    if (user) {
      setDropDownContent(true);
    } else if (!user) {
      setDropDownContent(false);
    }
  }, [user]);

  const clickHandler = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <>
      <Drawer openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      <div className="navbar fixed bg-base-300 z-50">
        {/* DRAWER BUTTON */}
        {dropDownContent ? (
          <div className="flex-none">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => toggleDrawer(openDrawer)}
            >
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
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>
        ) : null}
        {/* LOGO */}
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            <TbWorldSearch size={30} />
            World Data
          </Link>
        </div>
        {/* HAMBURGER */}
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-square btn-ghost"
            >
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
                  <li onClick={clickHandler}>
                    <div className="avatar font-semibold">
                      <p className="pr-2 focus:text-slate-100">
                        Hello, {user.name}
                      </p>
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
                  <li onClick={clickHandler}>
                    <button onClick={logout} className="focus:text-slate-100">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li onClick={clickHandler}>
                    <Link href="/login" className="focus:text-slate-100">
                      Login
                    </Link>
                  </li>
                  <li onClick={clickHandler}>
                    <Link href="/register" className="focus:text-slate-100">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
