import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <header className="hero">
        <div className="banner">
          <h1 className="banner-title">React Redux E-Commerce ...</h1>
          <div className="home-button">
            <Link
              to="/product"
              className="banner-btn"
            >
              Our Products
            </Link>
            <button className="banner-btn github">
              <a
                href="https://github.com/TsigeWonwosen/react-redux-shopping-cart"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Github
              </a>
            </button>
          </div>
        </div>
      </header>
    );
  }
}
export default Home;
