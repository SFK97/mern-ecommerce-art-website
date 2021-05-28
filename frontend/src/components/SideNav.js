import "./SideNav.css";
import { Link } from "react-router-dom";

const SideNav = ({ toggle, click }) => {
  const sideNavClass = ["sidenav"];

  if (toggle) {
    sideNavClass.push("toggle");
  }
  return (
    <div className={sideNavClass.join(" ")}>
      <h1 className="sidenav__title">MERN Art</h1>
      <i class="fas fa-times" onClick={click}></i>
      <ul className="sidenav__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-basket"></i>
            <span className="sidenav__cartbadge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
