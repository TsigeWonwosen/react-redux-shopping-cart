import React from "react";

import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer className="footerContainer">
      <div className="container">
        <div className="row">
          <div className="col l6 m8 s12">
            <h5 className="white-text">The Ethiopian</h5>
            <p className="grey-text text-lighten-4">
              The Ethiopian is the marketplace where you can get easy access for
              selling and buying products.
            </p>
          </div>
          <div className="col l4  m4 offset-l2 s12">
            <h5 className="white-text">Follow me on social media</h5>
            <div className="footer-fab">
              <ul className="footer-fab-small">
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://github.com/TsigeWonwosen/react-redux-shopping-cart"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.facebook.com/thethopia"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="#!"
                  >
                    <i className="fa fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="#!"
                  >
                    <i className="fa fa-youtube-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        © Copyright {new Date().getFullYear()} The Ethiopian. All rights
        reserved.
      </div>
    </footer>
  );
}
