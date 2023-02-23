import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  // destructuring info from props
  const { id, name, price, ratings, img } = product;
  return (
    <div className="product">
      <img src={img} alt=""></img>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p>Product Id: {id}</p>
        <p>
          Price: <span>$</span>
          {price}{" "}
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button onClick={() => addToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
