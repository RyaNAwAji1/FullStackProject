import React from "react";
import { Link } from "react-router-dom";
import Map1 from "../../Images/1.jpg";
import Map2 from "../../Images/2.jpg";
import MapPDF from "../../Images/MapPDF.pdf";
import "../../Css/Map.css";

const Map = () => {
  return (
    <div className="map-main">
      <h1>خريطة طويق</h1>
      <div className="map-content">
        <img src={Map1} alt="Map1" />

        <img src={Map2} alt="Map2" />
      </div>{" "}
      <div className="map-footer">
        <a href={MapPDF} target={"_blacnk"} alt="MapPDF"></a>
        <a href={MapPDF} target="_blank">
          PDF خريطة طويق
        </a>
        <a target={"_blacnk"} href="https://goo.gl/maps/kqnaoDzS9Xao9JkVA">
          <p>الطريق الئ اكاديمية طويق بخرائط قوقل</p>
        </a>
      </div>{" "}
    </div>
  );
};

export default Map;
