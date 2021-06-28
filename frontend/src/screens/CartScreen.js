import "./CartScreen.css";
import CartItem from "../components/Cart/CartItem";
import Header from "../components/Header";

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
          <div className="subtotal">
            <div className="subtotal__title">Your Order</div>
            <div className="subtotal__total">
              TOTAL
              <p>£299.99</p>
            </div>

            <div className="checkout__btn">Go to secure checkout</div>
            <div className="promocode">
              <label className="promocode__label">
                Enter a promotional code
              </label>
              <input
                className="promocode__field"
                type="text"
                maxlength="5"
              ></input>
              <button className="promocode__btn">Apply</button>
            </div>
            <div className="payments">
              <i src=""></i>
              {/* <i class="fab fa-cc-stripe"></i> */}
            </div>
            {/* Purchase button */}
            {/* Have a promocode? */}
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
