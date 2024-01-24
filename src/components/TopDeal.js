import React from "react";
import "../styles/TopDeal.css";

function TopDeal({ title, image, savings, brand }) {
  return (
    <div className="topdeal">
      <h2>{title}</h2>
      <img src={image} alt="" />
      <div className="topdeal__offer">
        <div className="topdeal__savings">
          <span className="topdeal__offertext">Up to {savings}% off</span>
        </div>
        <div className="topdeal__deal">
          <span className="topdeal__offertext">Deal</span>
        </div>
      </div>
      <p className="topdeal__brand">Save on {brand} and more</p>
      <p className="topdeal__shopmore">Shop more deals</p>
    </div>
  );
}

export default TopDeal;
