import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "../img/blur-close-up-code.jpg";

class Home extends Component {
  render() {
    return (
      <header className='hero'>
        {/* <img src={Background} alt='Background img' /> */}
        <div className='banner'>
          <h1 className='banner-title'>React Redux E-Commerce ...</h1>

          <Link to='/product' className='banner-btn'>
            {" "}
            Our Products
          </Link>
        </div>
      </header>
    );
  }
}
export default Home;
