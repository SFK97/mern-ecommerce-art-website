import "./ProductScreen.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

const ProductScreen = ({ isVisible, click, bg }) => {
  console.log(bg);
  return (
    <>
      <Header bg={bg} />
      <div className="box__container">
        <div className="box">
          <div className="image__container">
            <div className="left__image">
              <img
                src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="product"
              />
            </div>
            <div className="below__images">
              <img
                className="active"
                src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="product"
              />
              <img
                src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="product"
              />
              <img
                src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="product"
              />
            </div>
          </div>
          <div className="content">
            <h3 className="title">Product</h3>
            <div className="price">£99.99</div>
            <p>
              Aliqua enim sint eu nostrud eiusmod excepteur laborum id ea
              consectetur qui fugiat sint. Aliqua enim sint eu nostrud eiusmod
              excepteur laborum id ea consectetur qui fugiat sint. Aliqua enim
              sint eu nostrud eiusmod excepteur laborum id ea consectetur qui
              fugiat sint. Aliqua enim sint eu nostrud eiusmod excepteur laborum
              id ea consectetur qui fugiat sint.
            </p>
            <form>
              <div class="dropdown">
                <span> Canvas Size : </span>
                <select name="" id="">
                  <option value="small">10" x 10"</option>
                  <option value="medium">16" x 16"</option>
                  <option value="large">20" x 20"</option>
                </select>
              </div>
              <div className="quantity">
                <span> Quantity : </span>
                <input type="number" value="1"></input>
              </div>
            </form>
            <button className="btn" onClick={click}>
              <i className="fas fa-shopping-cart"></i> Add To Cart
            </button>
            <span className="stock">
              <i className="fas fa-check"></i> In Stock
            </span>
          </div>
        </div>
      </div>
      <Footer isVisible={isVisible} />
    </>
  );
};

export default ProductScreen;
