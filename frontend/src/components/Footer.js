import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <Link className="footer__logo" to="/">
          Mern Art
        </Link>
        <div className="menu__container">
          <div className="social__menu">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-instagram-square"></i>
            <i class="fas fa-angle-double-up"></i>
          </div>
        </div>
      </div>
      <div className="links__container">
        <ul className="website__links">
          <li>Contact</li>
          <li>FAQ</li>
          <li>About the shop</li>
          <li>Delivery Details</li>
          <li>Art for your business</li>
        </ul>
      </div>
      <div className="rights">
        Mern Art © {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
