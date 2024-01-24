import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Product from "../components/Product";
import SpecialSection from "../components/SpecialSection";
import TopDeal from "../components/TopDeal";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function Home() {
  const images = [
    "https://m.media-amazon.com/images/I/6175Ol5KP3L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71ZYCpZ4S+L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71CvS1DOvjL._SX3000_.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // automatically change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <SwitchTransition>
          <CSSTransition
            key={currentImageIndex}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <img
              className="home__image"
              src={images[currentImageIndex]}
              alt=""
            />
          </CSSTransition>
        </SwitchTransition>

        <div className="home__row">
          <SpecialSection
            title="Save up to 15% with automatic delivery"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/Mozart_EN_SnS_1x._SY304_CB627479958_.jpg"
            message="Learn more"
          />
          <TopDeal
            title="Top Deal"
            image="https://m.media-amazon.com/images/I/41jLuQX1V3L._AC_SY230_.png"
            savings={67}
            brand="ECOVACS"
          />
          <SpecialSection
            title="Shop in your currency"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/MOZART/COP/XCM_Manual_1234078_1236768_DE_de_de_cop_launch_gw_de_de_3202739_379x304_de_DE._SY304_CB409241614_.jpg"
            message="Learn more"
          />
          <SpecialSection
            title="Reacher: New episode Fridays"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/ReacherS2/RCHR_S2_DashboardCard_758x608_POST_Massive_PV_noLocale._SY608_CB571014291_.jpg"
            message="Watch now"
          />
        </div>

        <div className="home__row">
          <Product
            id="43840245"
            title="Kindle Paperwhite (16 GB) - Now with 6.8 inch display"
            price={169.99}
            image="https://m.media-amazon.com/images/I/61oJ1annLFL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="47383920"
            title="Redken Conditioner for Dry and Brittle Hair, All Soft Conditioner"
            price={13.5}
            image="https://m.media-amazon.com/images/I/71v6YWmZLEL._SX466_.jpg"
            rating={3}
          />
          <Product
            id="37593754"
            title="Bose QuietComfort Ultra Wireless Headphones"
            price={499.95}
            image="https://m.media-amazon.com/images/I/51NC9ErIQtL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="94720583"
            title="Can't Hurt Me: Master Your Mind and Defy the Odds Paperback"
            price={24.48}
            image="https://m.media-amazon.com/images/I/61pDNU9qEGL._SL1360_.jpg"
            rating={5}
          />
          <Product
            id="75649275"
            title="HP 302 (F6U66AE) Original Black Ink Cartridge for HP DeskJet"
            price={17.99}
            image="https://m.media-amazon.com/images/I/71bvEk1+2wL._AC_SX466_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <SpecialSection
            title="Save resources, buy second-hand"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/warehouse-deals/Desktop_Sustainability_379x304._SY304_CB586624171_.jpg"
            message="Shop now"
          />
          <SpecialSection
            title="Home Decor"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/XCM_Manual_1297943_1520891_DE_EN_january_themed_gw_cards_home_379x304._SY608_CB627501567_.jpg"
            message="See more"
          />
          <SpecialSection
            title="Discover your Winter Treasures"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/Events/2023/XMAS/Homepage/XCM_CUTTLE_1656637_3498971_758x608_2X_en_GB._SY608_CB571095384_.jpg"
            message="See more"
          />
        </div>

        <div className="home__row">
          <Product
            id="35030104"
            title="EBL 8 pieces NI-MH batteries"
            price={14.99}
            image="https://m.media-amazon.com/images/I/61unLeIzq6L._AC_SX522_.jpg"
            rating={2}
          />
          <Product
            id="97339128"
            title="Google Pixel 8 Pro – Android Smartphone"
            price={1159.0}
            image="https://m.media-amazon.com/images/I/71iCxoF7m-L._AC_SX466_.jpg"
            rating={5}
          />
          <Product
            id="15535408"
            title="Set of 60 Birthday Balloons with Banner"
            price={9.95}
            image="https://m.media-amazon.com/images/I/71FIbC1gnXL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="29229352"
            title="FitVille Extra Wide Running Shoes Men"
            price={68.99}
            image="https://m.media-amazon.com/images/I/71E4DVT-pqL._AC_SL1500_.jpg"
            rating={1}
          />
        </div>

        <div className="home__row">
          <Product
            id="65820610"
            title="Fouvin Teddy Bear, Plush Bear, Teddy with Rose"
            price={18.99}
            image="https://m.media-amazon.com/images/I/51aeDkEVf9L._AC_SX522_.jpg"
            rating={4}
          />
          <Product
            id="85630668"
            title="4-Piece Air-Purification Mix, Real Plants"
            price={13.9}
            image="https://m.media-amazon.com/images/I/712VBkr-DQL._AC_SX522_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="25738220"
            title="Philips 2200 SeriesFully Automatic Coffee Machine"
            price={399.0}
            image="https://m.media-amazon.com/images/I/61pDBPMpdHL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="93846293"
            title="Brigamo 16840 XXL Plush Donut Cushion"
            price={19.95}
            image="https://m.media-amazon.com/images/I/71DRJZ+XoyL._AC_SX569_.jpg"
            rating={5}
          />
          <Product
            id="69860409"
            title="Thrustmaster T300 RS GT Force Feedback Racing Wheel"
            price={449.0}
            image="https://m.media-amazon.com/images/I/61a8cw4WUEL._AC_SX522_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <SpecialSection
            title="Compatible products for your car"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/EU5_graphic_creation/foto_gateway_ritagliata_758x608._SY608_CB574595745_.jpg"
            message="See more"
          />
          <SpecialSection
            title="Buy 4, save 5%"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/Buy_More_and_Save/Gateway/AmazonBasket_Dec2023_Desktop_758x608_English._SY608_CB573124422_.jpg"
            message="Discover more"
          />
          <TopDeal
            title="Top Deal"
            image="https://m.media-amazon.com/images/I/41d+So0hDxL._AC_SY230_.jpg"
            savings={9}
            brand="Samsung"
          />
          <SpecialSection
            title="Deals on used products"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/warehouse-deals/Desktop_PP_379x304._SY304_CB586628809_.jpg"
            message="Shop now"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
