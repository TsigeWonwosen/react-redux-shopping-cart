import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, X } from "lucide-react";
import "../styles/NavBar.scss";

export default function NavBar({ cartLen }) {
  const [navOpen, setNavOpen] = useState(false);
  const toggleTrueFalse = () => setNavOpen(!navOpen);
  return (
    <div className="navBar">
      <button
        className="checkbtn"
        onClick={() => {
          toggleTrueFalse();
        }}
      >
        {!navOpen && <i className="material-icons Large">dehaze</i>}
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
            <a href="/man">Men</a>
          </li>
          <li>
            <a href="/woman">Women</a>
          </li>
          <li>
            <a href="/kids">Kids</a>
          </li>
          <li>
            <div className="cartIcon relative">
              <Link to="/cart">
                <ShoppingCart />
              </Link>
              <span className="absolute top-2 -right-3 bg-red-700/80  rounded-full px-[3px] py-[3px]  w-auto flex justify-center items-center">
                {cartLen > 0 ? <h3>{cartLen}+</h3> : ""}
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
