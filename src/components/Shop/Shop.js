import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // selected product event handler
  let newCart = [];
  const addToCart = (selectedProduct) => {
    const exists = cart.find((element) => element.id === selectedProduct.id);
    if (!exists) {
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((element) => element.id !== selectedProduct.id);
      newCart = [...rest, exists];
    }

    setCart(newCart);
  };

  console.log(cart);

  // choose one button event handler
  const showRandomProduct = (chooseOne) => {
    newCart = [];
    const selectOne = Math.floor(Math.random() * chooseOne.length);
    newCart = [chooseOne[selectOne]];
    setCart(newCart);
  };

  // cart clear button event handler
  const clearCart = () => {
    newCart = [];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      {/* product container handled from product component  */}
      <div className="product-container">
        {products.map((product) => (
          <Product addToCart={addToCart} key={product.id} product={product}></Product>
        ))}
      </div>
      {/* cart container handled from cart component  */}
      <div className="cart-container">
        <Cart cart={cart} products={products} showRandomProduct={showRandomProduct} clearCart={clearCart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
