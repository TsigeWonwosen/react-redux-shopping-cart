import React from "react";
import { Link } from "react-router-dom";
import "./videoBackgraund.scss";

export default function VideoBackground() {
  return (
    <>
      <div className='showcase'>
        <div className='video-container'>

          <iframe
          title="City of Turin Video"
            src='/hero_video.mp4'
            frameborder='0'
            allow='autoplay; encrypted-media'
            allowfullscreen
            style={{ position: "fixed", width: "100%", left: 0, top: 0 }}
          ></iframe>
        </div>
        <div className='content'>
          <h1>Shopping Cart</h1>
          <h3>React redux </h3>
          <Link to='/product' className='banner-btn'>
            {" "}
            Our Products
          </Link>
          <button className='banner-btn github'>
            <a
              href='https://github.com/TsigeWonwosen/react-redux-shopping-cart'
              target='_blank'
              rel="noopener noreferrer" 
            >
              View on Github
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
