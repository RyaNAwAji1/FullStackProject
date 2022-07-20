import React from "react";
import "../Css/Home.css";
import Logo from "../Images/logo.svg";
import Video from "../Images/video.mp4";

const Home = ({ setIsLogged }) => {
  return (
    <>
      <div className="main">
        <div className="s1">
          <video autoPlay muted loop>
            <source src={Video} type="video/mp4" />
          </video>
          <div
            className="s1-content"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={Logo} />
            <p>
              سعيًا لتحقيق رؤية 2030 تم تأسيس أكاديمية طويق والتي تهدف إلى تمكين
              100 ألف مبرمج بحلول عام 2030، وتقدم أكاديمية طويق عدد من المعسكرات
              البرمجية والدورات المكثفة والقصيرة بالإضافة إلى إطلاقها لمنصة سطر
              التعليمية لتكون أول منصة عربية متخصصة في مجالات التقنية الحديثة
              باللغة العربية.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
