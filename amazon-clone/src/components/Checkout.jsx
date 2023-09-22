import React from "react";
import "@/styles/Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkoutleft">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon-ad"
          className="checkout-ad"
        />

        <div>
          <h2 className="checkout-title">Your Shopping Cart</h2>
        </div>
      </div>

      <div className="checkout-right">
      
        <h2>tSUBTO</h2>
      </div>
    </div>
  );
};

export default Checkout;
