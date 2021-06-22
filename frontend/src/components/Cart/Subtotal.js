import React from "react";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <div className="subtotal__title">Your Order</div>
      <div className="subtotal__total">
        Order subtotal:
        <p>£299.99</p>
      </div>
      <div className="checkout__btn"></div>
      <div className="payments">
        <i src=""></i>
        <i class="fab fa-cc-stripe"></i>
      </div>
      {/* Purchase button */}
      {/* Have a promocode? */}
      {/*  */}
    </div>
  );
};

export default Subtotal;
