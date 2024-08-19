import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Img1 from "../asset/images/banner_v1.avif";
import Img2 from "../asset/images/banner-right-web.webp";
import Logo1 from "../asset/logos/AWS_Home.svg"
import Logo2 from "../asset/logos/Caltech_Home.svg"
import Logo3 from "../asset/logos/IITG_Home.svg"
import Logo4 from "../asset/logos/Miscrosoft_Home.svg"
import Logo5 from "../asset/logos/Purdue_Home.svg"
import Logo6 from "../asset/logos/SPJain_Home.svg"
import Logo7 from "../asset/logos/iimindore_Home.svg"
import Logo8 from "../asset/logos/iitRoorkee_Home.svg"
import Logo9 from "../asset/logos/iitmadras_Home.svg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";



const logos = [Logo1,Logo2,Logo4,Logo3,Logo5,Logo6,Logo7,Logo8,Logo9];

const MainContainer = () => {


    const settings = {
        infinite: true,
        slidesToShow: 5, // Number of logos visible at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Speed of sliding
        arrows: false,
        pauseOnHover: true,
      };
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Img1} alt="First slide" />
            <div className="carousel-caption">
            <h1>Worlds #1</h1>
            <h1>Online Bootcamp</h1>
             <h5><b>5,000,000 </b>carrier advanced</h5>
             <h5><b>15,000 </b>live classes every month</h5>
             <h5><b>85%</b> report carrier benefits including promotion or new jobs</h5>
           
            <button className="btn-explore">Explore Programs</button>
          </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Img2} alt="Second slide" />
            <div className="carousel-caption">
            <h4>All our top programs include</h4>
            <h4><span id="Ai">Genrative AI Components</span></h4>

            <h2>Be a leader in your fiels</h2>
            <h2>Change Adapt and Build with AI</h2>

            <button className="btn-genAi">Explore Gen AI Programs</button>
          </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

 
   

     <div className="logo-slider-container">
  <div className="heading-container">
    <h6>Partnering with the world's leading universities and companies</h6>
  </div>
  <Slider {...settings}>
    {logos.map((logo, index) => (
      <div key={index} className="logo-slide">
        <img src={logo} alt={`Logo ${index + 1}`} />
      </div>
    ))}
  </Slider>
</div>


      </div>

  );
};

export default MainContainer;
