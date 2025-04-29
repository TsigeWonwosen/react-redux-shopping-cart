import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import SearchAndFilter from "./SearchAndFilter";

export default function NavBar({ cartLen }) {
  const [navOpen, setNavOpen] = useState(false);
  const toggleTrueFalse = () => setNavOpen(!navOpen);
  const location = useLocation();

  return (
    <div className="w-full h-auto md:h-[60px] bg-white px-10 flex justify-between items-center shadow-lg ">
      <div className="full max-w-[1280px] mx-auto w-full flex justify-between items-center">
        <div className="h-full">
          <Link
            to="/"
            className="w-auto h-full flex justify-center items-center font-semibold md:text-lg  text-md"
          >
            <span className="text-md md:text-lg  text-[#00B34A] text-center mr-1   flex  justify-center items-center">
              The
            </span>
            Ethiopian
            <span className="text-[25px] text-green-600 text-center h-4 w-2 mb-1 flex  justify-center items-center">
              .
            </span>
          </Link>
        </div>
        <section className="flex w-full h-full md:hidden justify-center items-center">
          <SearchAndFilter />
        </section>
        <button
          className="block md:hidden w-7 h-7 focus:bg-transparent transition-all duration-200"
          onClick={() => {
            toggleTrueFalse();
          }}
        >
          {!navOpen && <Menu />}
          {navOpen && <X />}
        </button>

        <section className="hidden w-full h-full md:flex justify-center items-center">
          <SearchAndFilter />
        </section>
        {/* For Desktop Navbar  */}
        <ul className="hidden md:flex justify-center items-center  gap-3 text-[15px] mr-4">
          {NavLinks.map((navs) => (
            <li
              key={navs.titel}
              className={` text-gray-600 hover:text-green-500 transition-all duration-300 w-auto ${
                navs.url === location.pathname &&
                "text-green-500 border-b-[2px] border-green-500 py-2"
              }`}
            >
              <Link to={navs.url}>{navs.titel}</Link>
            </li>
          ))}
          <li className="relative w-6 h-6 text-gray-600 hover:text-green-500 transition-all duration-300">
            <Link
              to="/cart"
              className={` text-gray-600 hover:text-green-500 transition-all duration-300 ${
                "/cart" === location.pathname &&
                "text-green-500 border-b-[2px] border-green-500 py-2"
              }`}
            >
              <ShoppingCart className="w-full h-full" />
            </Link>
            {cartLen > 0 && (
              <span className="absolute -top-3 -right-5 bg-red-700/80  rounded-[50%]  w-6 h-6 flex justify-center items-center">
                <h3 className="text-white text-[13px] font-medium">
                  {cartLen}+
                </h3>
              </span>
            )}
          </li>
        </ul>
        {/* For Moble Navbar  */}

        {/* For Moble Navbar  */}
        {navOpen && (
          <ul className=" absolute top-[63px] right-2 flex md:hidden justify-center flex-col z-20 items-center  gap-3 text-[15px] bg-white w-1/2 h-auto py-8 rounded-b-md shadow-lg">
            {NavLinks.map((navs) => (
              <li
                key={navs.titel}
                className={`w-[60%] my-auto text-gray-600 hover:text-gray-900 transition-all duration-300 border-b-[1px] border-gray-100 py-1 flex justify-center items-center  ${
                  navs.url === location.pathname &&
                  "text-green-500 border-b-[1px] border-green-500 "
                }`}
                onClick={() => toggleTrueFalse()}
              >
                <Link to={navs.url}>{navs.titel}</Link>
              </li>
            ))}
            <li className="relative w-6 h-6 text-gray-600 hover:text-gray-900 transition-all duration-300 mt-2">
              <Link
                to="/cart"
                className="w-full h-full"
                onClick={() => toggleTrueFalse()}
              >
                <ShoppingCart className="w-full h-full" />
              </Link>
              {cartLen > 0 && (
                <span className="absolute -top-3 -right-5 bg-red-700/80  rounded-[50%]  w-6 h-6 flex justify-center items-center">
                  <h3 className="text-white text-[13px] font-medium">
                    {cartLen}+
                  </h3>
                </span>
              )}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

const NavLinks = [
  { url: "/", titel: "Home" },
  { url: "/products", titel: "Products" },
  { url: "/signin", titel: "SignIn" },
];
