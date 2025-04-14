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
            <div className="cartIcon">
              <Link to="/cart">
                <ShoppingCart />
              </Link>
              {cartLen > 0 ? <h6 style={cartStyle}>{cartLen}+</h6> : ""}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const cartStyle = {
  position: "absolute",
  top: "-5px",
  right: "-5px",
  borderRadius: "50%",
  width: "25px",
  height: "22px",
  background: "#e65100",
  color: "white",
  fontSize: "0.8rem",
  display: "flex",
  justifyContent: "center",
  letterSpacing: "1px",
  fontFamily: "sans-serif",
  fontVariant: "small-caps",
  fontStyle: "italic",
  alignItems: "center",
  fontWeight: "bold",
  zIndex: "100",
};
