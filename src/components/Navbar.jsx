import React, { useState } from "react";
import Logo from "../assets/logo/tesla-logo.svg";
import { TfiClose } from "react-icons/tfi";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center px-12 p-4 text-sm">
      <div>
        <a href="https://tesla.com">
          <img className="h-3 cursor-pointer" src={Logo} alt="Tesla logo" />
        </a>
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer items-center">
          <li className="py-1 px-4 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/models">Model S</a>
          </li>
          <li className="py-1 px-4 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/model3">Model 3</a>
          </li>
          <li className="py-1 px-4 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/modelx">Model X</a>
          </li>
          <li className="py-1 px-4 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/modely">Model Y</a>
          </li>
          <li className="py-1 px-4 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/solarroof">Solar Roof</a>{" "}
          </li>
          <li className="py-1 px-4 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/solarpanels">Solar Panels</a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer items-center">
          <li className="py-1 px-4 hover:rounded hover:bg-black/5">
            <a href="https://shop.tesla.com/">Shop</a>
          </li>
          <li className="py-1 px-4 hover:rounded hover:bg-black/5">
            <a href="https://www.tesla.com/teslaaccount">Account</a>
          </li>
          <li
            onClick={handleNav}
            className="py-1 px-4 hover:rounded hover:bg-black/5"
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
            ? "bg-white absolute top-0 right-0 w-80 h-full z-10"
            : "fixed right-[100%]"
        }
      >
        <div className="flex justify-end pr-8 pt-8">
          <TfiClose
            onClick={handleNav}
            className="rounded p-1 hover:bg-black/5"
            size={28}
          />
        </div>
        {/* CURSOR-POINTER PROVISÓRIO */}
        <ul className="pt-8 px-6 cursor-pointer">
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Model S</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Model 3</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Model X</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Model Y</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Solar Roof</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Solar Panels</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Existing Inventory</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Used Inventory</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Trade-In</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Test Drive</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Insurance</li>
          <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Powewall</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
