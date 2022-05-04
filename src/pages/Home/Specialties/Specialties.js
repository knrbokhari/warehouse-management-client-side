import React from "react";
import "./Specialties.css";

const Specialties = () => {
  return (
    <div>
      <div className="background">
        <div className="container py-5 Specialties">
          <h2 className="text-center mb-0">Our Specialties</h2>
          <p
            className="text-center mt-2 mb-4 pb-1"
            style={{ fontSize: "19px" }}
          >
            Best Solution for Your Needs
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <img
                  src="https://i.ibb.co/CM3K8Fm/mt-1508-home-icon1.png"
                  alt=""
                />
                <h4>Storage</h4>
              </div>
              <p>
                We provide storage from general goods to automotive parts for
                long- or short-term storage
              </p>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <img
                  src="https://i.ibb.co/3zb8p9t/mt-1508-home-icon2.png"
                  alt=""
                />
                <h4>Distribution</h4>
              </div>
              <p>
                DEPOT management system and reporting capabilities allow us to
                fulfill all your orders
              </p>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <img
                  src="https://i.ibb.co/HdMT1cH/mt-1508-home-icon3.png"
                  alt=""
                />
                <h4>Trucking</h4>
              </div>
              <p>
                Whether it’s overnight or during the day, across town or across
                the North Dakota region, we have the experience you seek
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row justify-content-center align-items-center py-5"
        style={{
          fontSize: "25px",
          fontWeight: "400",
          color: "#fff",
          backgroundColor: "#1f3d6c",
        }}
      >
        <div className="col-11 col-sm-8 mx-auto text-center">
          <h3
            style={{
              fontSize: "25px",
            }}
          >
            Contact us now for a quote or more information on how we can help
            you
          </h3>
        </div>
        <div className="col-11 col-sm-4 mb-0 d-flex justify-content-center">
          <button
            className="buttons mt-5 mb-0 mt-sm-0"
            style={{
              width: "200px",
              fontSize: "17px",
              borderRadius: "50px",
              height: "75px",
            }}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Specialties;
