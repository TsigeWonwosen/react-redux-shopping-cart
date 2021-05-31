import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../NavBar.scss";

export default function NavBar({ cartLen }) {
  const [navOpen, setNavOpen] = useState(false);
  const toggleTrueFalse = () => setNavOpen(!navOpen);
  return (
    <div className='navBar'>
      <button
        className='checkbtn'
        onClick={() => {
          toggleTrueFalse();
        }}
      >
        <i className='material-icons Large'>dehaze</i>
      </button>

      <div className='logo'>
        <Link to='/'>Shoppi</Link>
      </div>
      <nav className='nav'>
        <ul
          className={`links ${navOpen ? "show-nav" : ""}`}
        >
          <li>
            <Link
              to='/'
              style={{
                width: "110px",
                display: "flex",
                marginRight: "1rem",
              }}
            >
              Home <i className='material-icons'>home</i>
            </Link>
          </li>
          <li>
            <Link to='/product'>Product</Link>
          </li>
          <li>
            <Link to='/cart'>
              <div       
              >
                <i className='large material-icons'>add_shopping_cart </i>
                <div>
                  {cartLen > 0 ? <h6 style={cartStyle}>{cartLen}+</h6> : ""}
                </div>
              </div>
            </Link>
          </li>
          <li>
            <a href='/order'>Credit</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const cartStyle = {
  position: "absolute",
  top: "-12px",
  right: "-0.2px",
  borderRadius: "50%",
  padding: " 0.2rem 0.2rem",
  width: "27px",
  height: "27px",
  background: "#e65100",
  color: "white",
};
