import React from "react";

export default function Footer() {
  return (
    <footer className='page-footer #212121 grey darken-4'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 m8 s12'>
            <h5 className='white-text'>React Redux - FullStack</h5>
            <p className='grey-text text-lighten-4'>
              For More information contact Me
            </p>
          </div>
          <div className='col l4  m4 offset-l2 s12'>
            <h5 className='white-text'>Follow me on social media</h5>
            <div className='footer-fab'>
              <ul className='footer-fab-small'>
                <li>
                  <a
                    className='grey-text text-lighten-3'
                    href='https://github.com/TsigeWonwosen/react-redux-shopping-cart'
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <i className='fa fa-github-square'></i>
                  </a>
                </li>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    <i className='fa fa-linkedin-square'></i>
                  </a>
                </li>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    <i className='fa fa-facebook-square'></i>
                  </a>
                </li>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    <i className='fa fa-youtube-square'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-copyright #9e9e9e grey'>
        <div className='container'>
          © 2020 Wondwosen
          <a className='grey-text text-lighten-4 right' href='/'>
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}
