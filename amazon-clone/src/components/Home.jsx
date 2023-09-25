import React, { useEffect, useState } from "react";
import "@/styles/Home.css";
import Product from "./Product";

const Home = () => {
  const URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const productsPerRow = [4, 4, 4]; // Adjust this as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Distribute products into rows based on the productsPerRow array
  const productRows = [];
  let currentIndex = 0;
  for (const productsInRow of productsPerRow) {
    const row = products.slice(currentIndex, currentIndex + productsInRow);
    productRows.push(row);
    currentIndex += productsInRow;
  }

  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="alexa"
        />

        {Array.isArray(products) ? (
          productRows.map((row, rowIndex) => (
            <div className="home-row" key={rowIndex}>
              {row.map((product) => (
                <Product
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  rating={Math.floor(product.rating.rate)}
                />
              ))}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}

        <div className="home-row"></div>
        <div className="home-row"></div>
      </div>
    </div>
  );
};

export default Home;
