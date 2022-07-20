import React from "react";
import "../..//Css/Student.css";
import Map from ".//map.png";

import Note from ".//note.png";
import face from "../../Images/face.webp";
import Book from ".//book.jpg";
import Food from ".//food.jpg";
import Course from "..//../Images/course.jpg";
import { useNavigate } from "react-router-dom";
const StudentDash = () => {
  const navigate = useNavigate();
  const note = () => {
    navigate("/note");
  };
  const map = () => {
    navigate("/map");
  };
  const library = () => {
    navigate("/library");
  };
  const food = () => {
    navigate("/food");
  };
  const id = () => {
    navigate("/student-id");
  };
  const course = () => {
    navigate("/course");
  };

  return (
    // <div className="student-main">
    <div className="cards-main">
      <h1 className="head">صفحة الخدمات</h1>
      {/* <div className="cards"> */}
      <div className="row m-3">
        <div className="col-md-6 col-lg-6">
          <div
            className="cardd card1 "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img src={face} alt="Map" />
            <button
              className="button-87"
              role="button"
              onClick={id}
              type="button"
            >
              البطاقة التعريفيه{" "}
            </button>
          </div>{" "}
        </div>
        <div className="col-md-6 col-lg-6">
          <div
            className="cardd card1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src={Map} alt="Map" />
            <button
              className="button-87"
              role="button"
              onClick={map}
              type="button"
            >
              خريطة طويق{" "}
            </button>
          </div>{" "}
        </div>

        <div className="col-md-6 col-lg-6">
          <div
            className="cardd card2"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img src={Note} alt="Note" />{" "}
            <button
              className="button-87"
              role="button"
              onClick={note}
              type="button"
            >
              مذكرات
            </button>
          </div>{" "}
        </div>

        <div className="col-md-6 col-lg-6">
          <div
            className="cardd card3"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img src={Course} alt="cource" />{" "}
            <button
              className="button-87"
              role="button"
              onClick={course}
              type="button"
            >
              انشطة الاكاديمية
            </button>
          </div>{" "}
        </div>
        <div className="col-md-6 col-lg-6">
          <div
            className="cardd card3"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={Book} alt="Book" />{" "}
            <button
              className="button-87"
              role="button"
              onClick={library}
              type="button"
            >
              المكتبة
            </button>
          </div>{" "}
        </div>

        <div className="col-md-6 col-lg-6">
          <div
            className="cardd card4"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={Food} alt="Food" />{" "}
            <button
              className="button-87"
              role="button"
              onClick={food}
              type="button"
            >
              dunkin donuts
            </button>{" "}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
    // </div>
  );
};

export default StudentDash;
