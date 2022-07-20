import React from "react";
import Pic from "../Images/us.jpg";
import "../Css/About.css";
const About = () => {
  return (
    <div className="about-main">
      <div className="about-content">
        <div className="about-contents"  data-aos="fade-down"
            data-aos-duration="1000">
        <p className="about-head">من نحن</p>

            <p className="about-p">
          نحن فريق عمل مكون من 3 مبرمجين<span className="ourNames">{" "} فيصل سعود, فيصل مبارك وريان محمد {" "}</span> طموحين واحلامنا عنان السماء, 
            لدينا همه مثل جبل طويق وهدفنا هو صنع مستقبل افضل للجيل القادم من المبرمجين


            </p>
          </div>
      </div>
    </div>
  );
};

export default About;
