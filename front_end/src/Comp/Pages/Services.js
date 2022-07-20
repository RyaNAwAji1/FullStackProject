import React from "react";
import "../Css/Services.css";
import Map from "../Images/map.png";
import Note from "../Images/note.png";
import Book from "../Images/book.jpg";
import Food from "../Images/food.jpg";
const Services = () => {
  return (
    <div className="services-main">
      <div className="services-content">
        <p className="services-head">الخدمات المقدمة</p>
        <div className="services-s1">
          <div className="box"      data-aos="fade-right"
            data-aos-duration="1000">
 
              <h1> خريطة المبنئ</h1>
              <p>
                الاطلاع علئ خريطة المبنئ والوصول الئ معسكر طويق عن طريق خرائط
                قوقل
              </p>
            </div>
          </div>
        
        <div className="services-s2">
          <div className="box"  data-aos="fade-left"
            data-aos-duration="1000">
            {" "}
          
         
              {" "}
              <h1> المذكرة</h1>
              <p> امكانية استخدام المذكره الذكية لكتابة وتخزين النصوص</p>
          </div>
        </div>
        <div className="services-s3">
          {" "}
          <div className="box"  data-aos="fade-right"
            data-aos-duration="1000">
            {" "}
           
    
              <h1> المكتبة</h1>
              <p>الاطلاع علئ الكتب المتوفرة في مكتبة طويق</p>
            </div>
        </div>
        <div className="services-s4">
        
          <div className="box"  data-aos="fade-left"
            data-aos-duration="1000">
          
           
             
              <h1> دانكن دونتس</h1>
              <p> سهلنا طريقة طلبك للدونات والقهوه بحيث تقدر تطلب توصيل لمكان شغلك في معسكر طويق</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
