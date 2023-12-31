import React from "react";
import "./Home.css";
import Product from "./Product";
import SpecialSection from "./SpecialSection";
import TopDeal from "./TopDeal";

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
            title="Home Decor"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/x-site/2022/Mozart_Evergreen/XCM_Manual_1297943_1520891_DE_EN_january_themed_gw_cards_home_379x304._SY608_CB627501567_.jpg"
            message="See more"
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
          <SpecialSection
            title="Reacher: New episode Fridays"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/ReacherS2/RCHR_S2_DashboardCard_758x608_POST_Massive_PV_noLocale._SY608_CB571014291_.jpg"
            message="Watch now"
          />
          <SpecialSection
            title="Buy 4, save 5%"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/Buy_More_and_Save/Gateway/AmazonBasket_Dec2023_Desktop_758x608_English._SY608_CB573124422_.jpg"
            message="Discover more"
          />
          <SpecialSection
            title="Compatible products for your car"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/EU5_graphic_creation/foto_gateway_ritagliata_758x608._SY608_CB574595745_.jpg"
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
            id="94720583"
            title="Can't Hurt Me: Master Your Mind and Defy the Odds Paperback – 10 Dec. 2018"
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
