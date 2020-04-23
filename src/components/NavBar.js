import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ cartLen }) {
  return (
    <div>
      <nav>
        <div className='nav-wrapper #3949ab indigo darken-1'>
          <input type='checkbox' id='check' />
          <label for='check' class='checkbtn'>
            <i class='material-icons'>dehaze</i>
          </label>
          <Link
            to='/'
            className='brand-logo flow-text'
            style={{ marginLeft: "50px" }}
          >
            Shopping Cart
          </Link>
          <ul
            id='nav-mobile'
            className='right hide-on-med-and-down'
            style={{ marginRight: "20px" }}
          >
            <li>
              <Link
                to='/'
                style={{ width: "110px", display: "flex", marginRight: "1rem" }}
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
                  style={{
                    position: "relative",
                    width: "40px",
                  }}
                >
                  <i className='large material-icons'>add_shopping_cart </i>
                  <div>
                    {cartLen > 0 ? (
                      <h6
                        style={{
                          position: "absolute",
                          top: "-12px",
                          right: "-0.2px",
                          borderRadius: "50%",
                          padding: " 0.2rem 0.2rem",
                          width: "27px",
                          height: "27px",
                          background: "#e65100",
                          color: "white",
                        }}
                      >
                        {cartLen}+
                      </h6>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <a href='/order'>Credit</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
