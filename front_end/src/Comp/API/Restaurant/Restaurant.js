import React from "react";
import d1 from "../../Images/d1.jpg";
import d2 from "../../Images/d2.jpg";
import d3 from "../../Images/d3.jpg";
import d4 from "../../Images/d4.jpg";
import d5 from "../../Images/dancen/00.jpg";
import d6 from "../../Images/dancen/22.webp";
import d7 from "../../Images/dancen/33.jpg";
import d8 from "../../Images/dancen/44.webp";
import d9 from "../../Images/dancen/55.jpg";
import d10 from "../../Images/dancen/66.jpeg";
import d11 from "../../Images/dancen/77.jpg";
import d12 from "../../Images/dancen/140.webp";
import d13 from "../../Images/dancen/99.webp";
import d14 from "../../Images/dancen/130.jpg";
import { useNavigate } from "react-router-dom";
import title from "../../Images/title.jpg";
import "../../Css/Restaurant.css";
const Restaurant = () => {
  const navigate = useNavigate();
  const order = () => {
    navigate("/order");
  };
  return (
    <div className="food-top">
      <div className="food-top-content">
        <h1 className="restaurant-head">دانكن دونتس</h1>
        <button onClick={order} className="button-81">
          انشاء طلب
        </button>
      </div>{" "}
      <div className="row m-3">
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d1} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d2} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d3} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d4} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d5} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d6} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d7} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d8} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d9} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d10} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d11} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d12} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d13} alt="d1" />
        </div>
        <div className="col-md-6 col-lg-4">
          <img className="food-img" src={d14} alt="d1" />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
