import "./CartScreen.css";
import CartItem from "../components/Cart/CartItem";
import Header from "../components/Header";
import Subtotal from "../components/Cart/Subtotal";

const CartScreen = () => {
  return (
    <>
      <Header />
      <h2 className="title">Your Cart</h2>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <CartItem />
        </div>
        <div className="cartscreen__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default CartScreen;
