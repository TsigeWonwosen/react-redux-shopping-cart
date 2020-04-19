import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <header className='hero'>
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
