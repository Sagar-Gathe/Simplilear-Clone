import React from "react";
import Award1 from "../asset/logos/2023_Top20_Web_L_IT_v_3.avif"
import Award2 from "../asset/logos/SASCS22_Gold_Winner_v_3.avif"
import Award3 from "../asset/logos/SACS_22_SILVER_v_3.avif"
import Award4 from "../asset/logos/Iela_Awards_2022_Bronze_SSPL.avif"
import Award5 from "../asset/logos/SACS_24_BRONZE_v_3.avif"
import visaImg from "../asset/images/visa.png"
const Training = () => {
  return (
    <div className="training-main">
      <div className="training-top">
        <div className="training-top-left">
            <h3> Employee and Team</h3>
            <h3> Training Solutions</h3>
            <p>Curriculum tailored to your organization, delivered with white-glove service and support</p>
            <button className="btn-demo">Request A Free Demo</button>
             <h6><b>Awards and Accolades</b></h6>
        </div>
        <div className="training-top-rigth">
           Supporting Enterprises Around the Globe

           <img src={visaImg}/>
        </div>
      </div>
      <div className="training-bottom">
         <div className="training-award">
            <img className="training-award-img" src={Award1}/>
             <h6>2023 Winner</h6>
             <p>For It and Technical Training</p>
         </div>
         <div className="training-award">
            <img className="training-award-img" src={Award2}/>
            <h6>2022 Gold Winner</h6>
            <p>For Customer Service by Stevie Awards</p>
         </div>
         <div className="training-award">
            <img className="training-award-img" src={Award3}/>
            <h6>2021 Silver Winner</h6>
            <p>For Customer Service by Stevie Awards</p>
         </div>
         <div className="training-award">
            <img className="training-award-img" src={Award4}/>
            <h6>2022 Bronze Winner</h6>
            <p>For Learning Delivery Platform</p>
         </div>
         <div className="training-award">
            <img className="training-award-img" src={Award5}/>
            <h6>2024 Bronze Winner</h6>
            <p>For Customer Service by Stevie Awards</p>
         </div>
      </div>
    </div>
  );
};

export default Training;
