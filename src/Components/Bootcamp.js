import React from "react";
import Img1 from "../asset/logos/v1.webp";
import Img2 from "../asset/logos/v2.webp";
import Img3 from "../asset/logos/v3.webp";
import Img4 from "../asset/logos/v4.webp";
import Logo1 from "../asset/logos/switchup.avif";
import Logo2 from "../asset/logos/trustpilot_v1.avif";
import Logo3 from "../asset/logos/course-report.avif";
import cImg1 from "../asset/images/EY_home.avif";
import cImg2 from "../asset/images/dell.avif";
import cImg3 from "../asset/images/BCG_home.avif";
import cImg4 from "../asset/images/vodafone.avif";
import cImg5 from "../asset/images/HP_home.avif";
import cImg6 from "../asset/images/Bosch.avif";
import cImg7 from "../asset/images/MPhasis_v_1_01.avif";
import cImg8 from "../asset/images/AIRBUS_home.avif";
import cImg9 from "../asset/images/The-World-Bank_home.avif";
import Testimonial from "./Testimonial";


const Bootcamp = () => {
  return (
    <div className="bootcamp-main">
      <div className="bootcamp-top">
        <div className="bootcamp-header">
          <h6>Our Online Bootcamp</h6>
          <h3>An immersive learning experience</h3>
        </div>
        <div className="bootcamp-categories">
          <div className="bootcamp-category">
            <img src={Img1}></img>
            <h6>Develop skills for real career growth</h6>
            <p>
              Cutting-edge curriculum designed in guidance with industry and
              academia to develop job-ready skills
            </p>
          </div>

          <div className="bootcamp-category">
            <img src={Img2}></img>
            <h6>
              Learn from experts active in their field, not out-of-touch trainers
            </h6>
            <p>
              Leading practitioners who bring current best practices and case
              studies to sessions that fit into your work schedule.
            </p>
          </div>

          <div className="bootcamp-category">
            <img src={Img3}></img>
            <h6> Learn by working on real-world problems</h6>
            <p>
              Capstone projects involving real world data sets with virtual labs
              for hands-on learning
            </p>
          </div>

          <div className="bootcamp-category">
            <img src={Img4}></img>
            <h6>Structured guidance ensuring learning never stops</h6>
            <p>
              24x7 Learning support from mentors and a community of like-minded
              peers to resolve any conceptual doubts
            </p>
          </div>
        </div>
      </div>
      <div className="bootcamp-mid">
        <div className="bootcamp-bottom-left">
          <h2>Hear it from our Alumni</h2>
          <div className="bootcamp-bottom-left-rating">
            4.5 | <img src={Logo1} />
          </div>
          <div className="bootcamp-bottom-left-rating">
            4.5 | <img src={Logo2} />
          </div>
          <div className="bootcamp-bottom-left-rating">
            4.4 | <img src={Logo3} />
          </div>
        </div>

        <div className="bootcamp-mid-rigth-main">

        <div className="bootcamp-mid-rigth">
          <img src={cImg1} alt="Image 1" />
          <img src={cImg2} alt="Image 2" />
          <img src={cImg3} alt="Image 3" />
          <img src={cImg4} alt="Image 4" />
          <img src={cImg5} alt="Image 5" />
          <img src={cImg6} alt="Image 6" />
          <img src={cImg7} alt="Image 7" />
          <img src={cImg8} alt="Image 8" />
          <img src={cImg9} alt="Image 9" />
        </div>

        </div>
      </div>

      <div className="bootcamp-bottom-bottom">
        curosal
       {/* <Testimonial/> */}
      </div>
    </div>

  );
};

export default Bootcamp;
