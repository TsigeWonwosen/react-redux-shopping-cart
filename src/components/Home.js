import React, { Component } from "react";
import { Link } from "react-router-dom";
import Baground from "../img/blur-close-up-code.jpg";

class Home extends Component {
  render() {
    return (
      <div className='homePage'>
        <img src={Baground} alt='backgroundIMage' style={homeStyle} />
        <div style={homeTitle} className='homeTitle'>
          <h4>Home Page ..</h4>
          <Link
            className='btn-small'
            to='/product'
            style={{ marginTop: "1rem" }}
          >
            {" "}
            Our Products
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;

const homeStyle = {
  maxHeight: "350px",
  width: "100%",
  objectFit: "cover",
  position: "relative",
  marginTop: "0",
  opacity: "0.7",
};
const homeTitle = {
  fontSize: "30rem",
  position: "absolute",
  top: "12rem",
  right: "20rem",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  letterSpacing: "2rem",
  background:
    "linear-gradient(to right, rgba(20, 25, 255, 0.5), rgba(0, 20, 250, 0.3))",
  padding: "2rem",
  borderRadius: "2%",
  zIndex: 4,
};
