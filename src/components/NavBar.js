import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, X } from "lucide-react";
import "../NavBar.scss";

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
        <Link to="/">Habesha.</Link>
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
  top: "-25px",
  right: "-20px",
  borderRadius: "50%",
  width: "22px",
  height: "22px",
  background: "#e65100",
  color: "white",
  fontSize: "0.7rem",
  display: "flex",
  justifyContent: "center",
  letterSpacing: "0.1rem",
  fontFamily: "sans-serif",
  fontVariant: "small-caps",
  fontStyle: "italic",
  alignItems: "center",
  fontWeight: "bold",
  zIndex: "100",
};
