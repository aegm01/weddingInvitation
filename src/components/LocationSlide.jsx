import React from "react";
import "./LocationSlide.css";

const LocationSlide = ({ title, p1, p2 = false, p3, p4 = false, googlemaps, bg }) => {
  return (
    <div className="locationSlideContainer">
      <img src={bg} alt="bg" />
      <h1>{title}</h1>
      <p>
        <i>
          <b>{p1}</b>
        </i>
      </p>
      {p2 ? "" : <h4>Vestimenta de gala</h4>}
      <h2>
        <i>
          <b>{p2[0]}</b> {p2[1]} <b>{p2[2]}</b> {p2[3]} <b>{p2[4]}</b>
        </i>
      </h2>
      <h2>
        <i>{p3}</i>
      </h2>
      {p4 ? <h3>{p4[1]}</h3> : ""}

      {googlemaps}
    </div>
  );
};

export default LocationSlide;
