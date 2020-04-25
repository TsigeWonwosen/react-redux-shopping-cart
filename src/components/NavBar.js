import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../NavBar.scss";

export default function NavBar({ cartLen }) {
  const [navOpen, setNavOpen] = useState(false);
  const toggleTrueFalse = () => setNavOpen(!navOpen);
  return (
    <div className='Navigation'>
      <button
        className='checkbtn'
        onClick={() => {
          console.log("Nav Open: " + navOpen);
          toggleTrueFalse();
        }}
      >
        <i className='material-icons Large'>dehaze</i>
      </button>

      <div className='Shopinglogo'>
        <Link to='/'>Shopping Cart</Link>
      </div>
      <nav className='nav'>
        <ul
          // className='right hide-on-med-and-down'
          className={`links ${navOpen ? "show-nav" : ""}`}
          // style={{ marginRight: "20px" }}
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
              // style={{
              //   position: "relative",
              //   width: "40px",
              // }}
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
