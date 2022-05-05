import React from "react";
import "./Service.css";

const Service = (props) => {
  const { img, serviceName, discription } = props.service;
  return (
    <div className="col-10 col-sm-6 col-md-4 service mb-5">
      <img src={img} alt="" className="w-100" />
      <div className="service-line"></div>
      <div className="service-details">
        <h3 className="service-name">{serviceName}</h3>
        {/* <p>{discription}</p> */}
      </div>
    </div>
  );
};

export default Service;
