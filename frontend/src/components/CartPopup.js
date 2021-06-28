import "./CartPopup.css";
import { Link } from "react-router-dom";

const CartPopup = ({ toggle, click }) => {
  const cartPopupClass = ["cartpopup"];

  if (toggle) {
    cartPopupClass.push("toggle");
  }

  return (
    <div className={cartPopupClass.join(" ")}>
      <div className="cartpopup__header">
        <p>Item Added To Your Basket</p>
        <i className="fas fa-times" onClick={click}></i>
      </div>
      <div className="cartpopup__content">
        <div className="cartpopup__image">
          <img
            src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="popup image"
          />
        </div>
        <div className="cartpopup__details">
          <h2>Product Name</h2>
          <p>£299.99</p>
        </div>
      </div>
      <div className="popup__buttons">
        <div className="continue__shopping">
          <p>Continue Shopping</p>
        </div>
        <Link className="go__to__cart">
          <p>Go To Cart</p>
        </Link>
      </div>
    </div>
  );
};

export default CartPopup;
