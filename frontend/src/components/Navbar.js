import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <h2>MERN Art</h2>
      </div>
      {/* Links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <span className="cartlogo__badge"></span>
            <i className="fas fa-shopping-basket"></i>
          </Link>
        </li>
        <li>
          <Link to="/">SHOP</Link>
        </li>
        <li>
          <Link to="/">ABOUT</Link>
        </li>
        <li>
          <Link to="/">CONTACT</Link>
        </li>
      </ul>
      {/* Hamburger Menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
