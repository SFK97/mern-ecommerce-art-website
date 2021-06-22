import "./CartItem.css";
import { Link } from "react-router-dom";

const cartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="product name"
        />
      </div>
      <Link to={`/product/${111}`} className="cartitem__name">
        <p>Product</p>
      </Link>
      <p className="cartitem__price">£299.99</p>
      {/* <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select> */}
      <button className="cartitem__delete">
        <i class="fas fa-times"></i>
      </button>
    </div>
  );
};

export default cartItem;
