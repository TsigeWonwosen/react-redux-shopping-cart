import "../styles/Footer.scss";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo + Description */}
        <div className="footer__section">
          <h2 className="footer__logo flex items-center">
            <span className="text-md md:text-xlg  text-[#00B34A] text-center mr-1   flex  justify-center items-center">
              The
            </span>{" "}
            Ethiopian
          </h2>
          <p className="footer__text">
            Your go-to destination for men’s, women’s, kids’ fashion &
            electronics.
          </p>
        </div>

        {/* Shop */}
        <div className="footer__section">
          <h3 className="footer__title">Shop</h3>
          <ul className="footer__list">
            <li>
              <Link to="/man">Men</Link>
            </li>
            <li>
              <Link to="woman">Women</Link>
            </li>
            <li>
              <Link to="/kids">Kids</Link>
            </li>
            <li>
              <Link to="#">Electronics</Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer__section">
          <h3 className="footer__title">Customer Service</h3>
          <ul className="footer__list">
            <li>
              <Link to="#">Help Center</Link>
            </li>
            <li>
              <Link to="#">Track Order</Link>
            </li>
            <li>
              <Link to="#">Returns</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Info */}
        <div className="footer__section">
          <h3 className="footer__title">Info</h3>
          <ul className="footer__list">
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} The Ethiopian. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
