import "./cartPopup.css";

const cartPopup = () => {
  return (
    <div className="cartpopup">
      <h1 className="popup__title"></h1>
      <div className="popup__image">
        <img
          src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="popup image"
        />
        <h2>Product Name</h2>
        <p>£299.99</p>
      </div>
      <div className="popup__buttons">
        <div className="continue__shopping">Continue Shopping</div>
        <div className="go__to__cart">Go To Cart</div>
      </div>
      <i className="fas fa-times"></i>
    </div>
  );
};

export default cartPopup;
