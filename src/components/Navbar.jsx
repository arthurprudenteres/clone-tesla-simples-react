import React, { useRef, useState, useEffect } from "react";
import Logo from "../assets/logo/tesla-logo.svg";
import { TfiClose } from "react-icons/tfi";
import gsap from "gsap";

function Navbar() {
  const [nav, setNav] = useState(false);
  const didAnimate = useRef(false);
  const navRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (didAnimate.current) {
      return;
    }
    didAnimate.current = true;
    gsap.from(navRef.current, {
      delay: .3,
      opacity: 0,
      duration: 2,
    })
  }, [])
  
  return (
    <div ref={navRef} className="flex justify-between items-center px-12 p-4 text-sm">
      <div>
        <img className="h-3 cursor-pointer" src={Logo} alt="Tesla logo" />
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer items-center">
          <li className="py-1 px-4  hover:rounded hover:bg-black/5 transition-all duration-300">Model S</li>
          <li className="py-1 px-4 hover:rounded hover:bg-black/5 transition-all duration-300">Model 3</li>
          <li className="py-1 px-4 hover:rounded hover:bg-black/5 transition-all duration-300">Model X</li>
          <li className="py-1 px-4 hover:rounded hover:bg-black/5 transition-all duration-300">Model Y</li>
          <li className="py-1 px-4 hover:rounded hover:bg-black/5 transition-all duration-300">
            Solar Roof
          </li>
          <li className="py-1 px-4 hover:rounded hover:bg-black/5 transition-all duration-300">
            Solar Panels
          </li>
        </ul>
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer items-center">
          <li className="py-1 px-4 hover:rounded hover:bg-black/5 transition-all duration-300">Shop</li>
          <li className="py-1 px-4 hover:rounded hover:bg-black/5 transition-all duration-300">Account</li>
          <li
            onClick={handleNav}
            className="py-1 px-4 hover:rounded hover:bg-black/5 transition-all duration-300"
          >
            Menu
          </li>
        </ul>
      </div>

      <div className="lg:hidden">
        <button
          onClick={handleNav}
          className="inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10"
        >
          Menu
        </button>
      </div>
      <div
        className={
          nav
            ? "bg-white absolute top-0 right-0 transform scale-x-100 w-80 h-full z-10 transition-all duration-500 ease-in-out origin-right"
            : "absolute top-0 right-0 h-full w-80 transition-all duration-500 transform scale-x-0 origin-right"
        }
      >
        <div className="flex justify-end pr-8 pt-8">
          <TfiClose
            onClick={handleNav}
            className="rounded p-1 hover:bg-black/5 cursor-pointer"
            size={28}
          />
        </div>
        {/* CURSOR-POINTER PROVISÓRIO */}
        <ul className="pt-8 px-6 cursor-pointer">
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Model S</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Model 3</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Model X</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Model Y</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Solar Roof
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Solar Panels
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Existing Inventory
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Used Inventory
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Trade-In</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Test Drive
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
            Insurance
          </li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Powewall</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
