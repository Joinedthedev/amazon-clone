import React, { useEffect, useState } from "react";
import "@/styles/Home.css";
import Product from "./Product";

const Home = () => {
  const URL = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const productsPerRow = [2, 4, 3]; // Determines the number of products per row.

  //   the essential use of this entire fetching process is to dynamically render products from an api call
  //   The useEffect hook is needed in order to fetch the data

  useEffect(() => {
    const fetchData = async () => {
      try {
        //this will check if the http response is okay. If it is everything will proceed and if its not an error will be
        //thrown
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("NETWORK RESPONSE FAILED");
        }
        const data = await response.json();
        setProducts(data); //this sets the data into our state array "prodcuts"

        // this will Shuffle the products randomly
        const shuffledProducts = [...data]; //Creates a new array and stores the products in them
        for (let i = shuffledProducts.length - 1; i > 0; i--) { //loops through the array in reverse order
          const j = Math.floor(Math.random() * (i + 1)); //creates random index j between 0 and i
          [shuffledProducts[i], shuffledProducts[j]] = [
            shuffledProducts[j],
            shuffledProducts[i],
          ];
        }

        // Distribute products into rows based on the productsPerRow array
        const productRows = [];
        let currentIndex = 0;
        for (const productsInRow of productsPerRow) {
          const row = shuffledProducts.slice(
            currentIndex,
            currentIndex + productsInRow
          );
          productRows.push(row);
          currentIndex += productsInRow;
        }

        setProducts(productRows);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []); //this bit ensures that its only ran once

  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="alexa"
        />

        {Array.isArray(products) ? (
          products.map((row, rowIndex) => (
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
