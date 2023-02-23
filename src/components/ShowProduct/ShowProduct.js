import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ShowProduct.css";

const ShowProduct = ({ item }) => {
  return (
    <div className="show-cart">
      <img src={item.img} alt="" />
      <p>{item.name}</p>
      <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
    </div>
  );
};

export default ShowProduct;
