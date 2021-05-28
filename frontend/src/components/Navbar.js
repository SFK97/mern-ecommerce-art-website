import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>MERN Art</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <span className="cartlogo__badge">0</span>
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

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
