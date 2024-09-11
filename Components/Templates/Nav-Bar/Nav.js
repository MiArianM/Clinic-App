import React, { useContext, useEffect, useState } from "react";
import { NavList } from "../../data/NavData.js";
import Link from "next/link";
import Switcher from "./ModeButton.js";
import { context } from "../context.js";
import Image from "next/image.js";
function Navbar() {
  const [showComponent, setShowComponent] = useState(false);
  const [smoothComes, setsmoothComes] = useState(false);
  const menudata = useContext(context);
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowComponent(true);
    }, 20);
    const timer2 = setTimeout(() => {
      setsmoothComes(true);
    }, 50);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  const toggleMenu = () => {
    menudata.setMenuOpen((menuOpen) => !menuOpen);
  };
  return (
    <div className="relative z-40">
      <nav className="relative px-4 py-4 flex items-center bg-white dark:bg-gray-900 justify-between">
        <div className="flex items-center gap-3">
          <Link className="text-3xl font-bold leading-none" href="/">
            <Image src={"/logo.png"} width={100} height={100} />
          </Link>
          {showComponent && (
            <Switcher
              className={`${
                smoothComes
                  ? "animate__animated animate__backInDown opacity-100"
                  : "opacity-0"
              } transition-opacity duration-500`}
            />
          )}
        </div>
        <div className="absolute left-0 lg:hidden">
          <button
            onClick={toggleMenu}
            className="navbar-burger flex items-center text-blue-600 p-3"
          >
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className=" hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          {NavList.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <Link
                  className="animate__animated animate__fadeInUp font-menu text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-gray-400 dark:text-gray-200 dark:hover:text-gray-50 hover:text-gray-500"
                  href={"/" + item.id}
                >
                  {item.name}
                </Link>
              </li>
              <li className="text-gray-300 last:hidden">
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-7 h-7 current-fill"
                >
                  <path d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </li>
            </React.Fragment>
          ))}
        </ul>
        <div>
          {" "}
          <a
            className="hidden transition-all duration-200 lg:inline-block  lg:ml-3 py-2 px-6 bg-gray-100 dark:bg-slate-400 dark:hover:bg-slate-300 dark:text-slate-950 hover:bg-gray-100 text-xl text-gray-900 font-menu rounded-xl"
            href="#"
          >
            ورود
          </a>
          <a
            className="hidden transition-all duration-200 lg:inline-block py-2 px-6 bg-blue-500 dark:hover:bg-blue-400 hover:bg-blue-600 dark:bg-blue-900 text-xl text-white font-menu rounded-xl"
            href="#"
          >
            ثبت نام
          </a>
        </div>
      </nav>
      {menudata.menuOpen && (
        <div className="navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white dark:bg-slate-700 border-r overflow-y-auto ">
            <div className="flex mb-8 justify-between">
              <Link className="text-3xl leading-none" href="/">
                <Image src={"/logo.png"} width={84} height={100} />
              </Link>
              <button onClick={toggleMenu} className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                {NavList.map((item, index) => (
                  <li key={index} className="mb-1">
                    <Link
                      className="dark:text-gray-100 block p-4 text-2xl font-menu *: text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                      href={"#"}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block transition-all duration-200 lg:inline-block  lg:ml-3 py-2 px-6 bg-gray-100 dark:bg-slate-400 dark:hover:bg-slate-300 dark:text-slate-950 hover:bg-gray-100 text-xl text-gray-900 font-menu rounded-xl text-center"
                  href="#"
                >
                  ورود
                </a>
                <a
                  className="mt-4 block transition-all duration-200 lg:inline-block py-2 px-6 bg-blue-500 dark:hover:bg-blue-400 hover:bg-blue-600 dark:bg-blue-900 text-xl text-white font-menu rounded-xl text-center"
                  href="#"
                >
                  ثبت نام
                </a>
              </div>
              <span className=" font-bold text-sm text-gray-500 sm:text-center dark:text-gray-400">
                <a
                  href="https://github.com/MiArianM"
                  className="font-mono font-bold hover:underline ml-2"
                >
                  © 2024 By -Mim™
                </a>
              </span>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
