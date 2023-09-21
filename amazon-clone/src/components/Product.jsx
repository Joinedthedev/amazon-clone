import React from "react";
import "@/styles/Product.css";

const Product = ({title, image, price, rating}) => {
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
        {rating}
        </div>
      </div>

      <img
        src={image}
        alt=""
      />

      <button id="btn">add to basket</button>
    </div>
  );
};

export default Product;
