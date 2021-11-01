import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className='about-details'>
        <div>
          <h5 className="pt-4">About Us</h5>
          <h3 className="heading"> <span style={{color: "#e10f28"}}>HK</span> Travel </h3>
          <p className='about-description'>HK Travel is a trusted and reliable tour and travel agency among all the leading and upadte tour-operating services in Bangladesh. We are here to bring the luxury to your traveling. HK Travel is a proud member of Association of Travel Agents of Bangladesh-ATAB and Tour Operator Association of Bangladesh. Safe traveling, your security, and your enjoyment are our focus during your travels. Our expericenced and expert traveling guides ensure that you do not need to move an inch from your comfort zone and make sure that you always have a beautiful satisfactory smile on your face. We believe that your smile is our succes and HK Travel will do anything to keep you smiling.

          </p>
        </div>
        <div className='d-flex align-items-center'>
    <img src="https://images.unsplash.com/photo-1524467128837-00f6644866d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80" className='img-fluid ' alt=''/>
        </div>
      </div>
    </div>
  );
};

export default About;