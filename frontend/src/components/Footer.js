import "./Footer.css";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="footer__container">
      {/* <Link className="footer__logo" to="/">
        Mern Art
      </Link> */}
      <div className="footer__wrapper">
        <div className="menu__container">
          <div className="social__menu">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-instagram-square"></i>
            <i
              class="fas fa-angle-double-up"
              onClick={scrollToTop}
              isVisible={isVisible}
            ></i>
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
      <div className="rights">Mern Art © {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
