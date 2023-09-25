import React from "react";
import "@/styles/Product.css";
import { useStateValue } from "./StateProvider";




const Product =  ({ id, title, image, price, rating }) => {
 const [{basket}, dispatch] = useStateValue();
 
 console.log("this is the bsket", basket)
 const addToBasket = () =>{
  dispatch({
    type: 'ADD_TO_BASKET',
    item:{
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,

    },
  })
 }

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
};

export default Product;
