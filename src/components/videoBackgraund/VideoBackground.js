import React from "react";
import { Link } from "react-router-dom";
import "./videoBackgraund.scss";

export default function VideoBackground() {
  return (
    <>
      <div className='showcase'>
        <div className='video-container'>
          {/* <video
            autoPlay
            muted
            loop
            style={{ position: "fixed", width: "100%", left: 0, top: 0 }}
          >
            {" "}
            {/* <source
              src='https://youtu.be/eCBaLcsMCRs?list=PLF6OZMIvu7e41ZFVtftWZVhSSeTy6CQ38'
              type='video/mp4'
            ></source> 
             </video> }
             */}

          <iframe
            src='https://www.youtube.com/embed/5KIl4bpaDBM?autoplay=1&mute=1&enablejsapi=1&loop=1&playlist=5KIl4bpaDBM&amp;showinfo=0&start=0'
            frameborder='0'
            allow='autoplay; encrypted-media'
            allowfullscreen
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
            >
              View on Github
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
