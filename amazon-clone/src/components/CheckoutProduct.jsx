import React from "react";
import '@/styles/CheckoutProduct.css'
const CheckoutProduct = ({id, image, title, price, rating}) => {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button>Remove From Basket</button>
      </div>
    </div> 
  );
};

export default CheckoutProduct;
