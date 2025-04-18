import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import "../styles/NavBar.scss";

export default function NavBar({ cartLen }) {
  const [navOpen, setNavOpen] = useState(false);
  const toggleTrueFalse = () => setNavOpen(!navOpen);
  return (
    <div className="navBar">
      <button
        className="checkbtn w-7 h-7"
        onClick={() => {
          toggleTrueFalse();
        }}
      >
        {!navOpen && <Menu />}
        {navOpen && <X />}
      </button>

      <div className="logo">
        <Link to="/">The Ethiopian.</Link>
      </div>
      <nav className="nav">
        <ul className={`links ${navOpen ? "show-nav" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/man">Men</Link>
          </li>
          <li>
            <Link to="/woman">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          <li className="w-7 h-7 ">
            <div className=" relative w-auto h-full  flex justify-center items-center">
              <Link
                to="/cart"
                className="w-full h-full"
              >
                <ShoppingCart />
              </Link>
              {cartLen > 0 && (
                <span className="absolute top-2 -right-3 bg-red-700/80  rounded-full px-[4px] py-[2px]  w-7 h-7 flex justify-center items-center">
                  <h3 className="text-white">{cartLen}+</h3>
                </span>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
