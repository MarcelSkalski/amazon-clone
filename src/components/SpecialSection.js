import React from "react";
import "../styles/SpecialSection.css";

function SpecialSection({ title, image, message }) {
  return (
    <div className="specialsection">
      <h2>{title}</h2>
      <div className="specialsection__imgcontainer">
        <img src={image} alt="" />
      </div>
      <p>{message}</p>
    </div>
  );
}

export default SpecialSection;
