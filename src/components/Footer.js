import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer #000000 grey darken-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col l6 m8 s12">
            <h5 className="white-text">Habesha</h5>
            <p className="grey-text text-lighten-4">
              The Habesha Web is the marketplace where you can get easy access
              for selling and buying products.
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
                    href="#!"
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
      <div className="footer-copyright #000000">
        <div className="container">
          © Copyright {new Date().getFullYear()} Habesha. All rights reserved.
          <a
            className="grey-text text-lighten-4 right"
            href="/"
          >
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}
