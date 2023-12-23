import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71ZYCpZ4S+L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="94720583"
            title="Can't Hurt Me: Master Your Mind and Defy the Odds"
            price={24.48}
            image="https://m.media-amazon.com/images/I/61pDNU9qEGL._SL1360_.jpg"
            rating={5}
          />
          <Product
            id="75649275"
            title="HP 302 (F6U66AE) Original Black Ink Cartridge for HP DeskJet 1110, 213x, 363x, HP Envy 452x, HP OfficeJet 383x, 465x, 52x"
            price={17.99}
            image="https://m.media-amazon.com/images/I/71bvEk1+2wL._AC_SX466_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="43840245"
            title="Kindle Paperwhite (16 GB) - Now with 6.8 inch display and adjustable colour temperature - No ads"
            price={169.99}
            image="https://m.media-amazon.com/images/I/61oJ1annLFL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="47383920"
            title="Redken Conditioner for Dry and Brittle Hair, Revitalises and Hydrated, with Fatty Acids, Antioxidants and Argan Oil, All Soft Conditioner"
            price={13.5}
            image="https://m.media-amazon.com/images/I/71v6YWmZLEL._SX466_.jpg"
            rating={3}
          />
          <Product
            id="37593754"
            title="Bose QuietComfort Ultra Wireless Headphones with Noise Cancelling for Spatial Sound, Over-Ear Headphones with Microphone, Up to 24 Hours Battery Life, Headphones with Room Sound, Black"
            price={499.95}
            image="https://m.media-amazon.com/images/I/51NC9ErIQtL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="25738220"
            title="Philips Domestic Appliances 2200 Series EP2231/40 Fully Automatic Coffee Machine, 3 Coffee Specialities (LatteGo Milk System) Piano Lacquer Black/Black, Glossy Black"
            price={399.0}
            image="https://m.media-amazon.com/images/I/61pDBPMpdHL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
