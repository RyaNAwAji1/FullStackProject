import React from "react";
import face from "../../Images/face.webp";
import bc from "../../Images/bc.png";

const StudentId = () => {
  return (
    <div className="id-main">
      <h1 className="id-h1">بطاقة الطالب</h1>
      <div className="id-content">
        <div className="id-card1" data-aos="fade-left"
            data-aos-duration="1000">
            <img className="face-id" src={face} alt="id" />
        <div className="id-info">
            <p>الاسم: صالح البراهيم</p>
            <p>رقم الطالب: 2019058</p>
            <p>الدورة: معسكر جافا</p>
            
        </div>
       
        </div>
        <div className="id-card2" data-aos="fade-right"
            data-aos-duration="1000">
            <img className="bc-id" src={bc} alt="id" />

       
        </div>
      </div>
      <p className="id-p">بطاقة الطالب فعاله في فترة مدة دراسته في المعسكر</p>
    </div>
  );
};

export default StudentId;
