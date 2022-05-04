import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const banner = () => {
  return (
    <Carousel>
      <Carousel.Item className="fast-slide slide" interval={1000}>
        <Carousel.Caption>
          <h3>Distribution, Storage, Warehousing & Fulfillment.</h3>
          <p>
            Your solution for first class warehousing services for the goods,
            food, grocery, pharmaceutical and general commodity industries.
          </p>
          <button
            className="buttons buttons-hover"
            style={{
              marginBottom: "100px",
              fontSize: "18px",
              borderRadius: "35px",
              padding: "10px 20px",
            }}
          >
            Our Services
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="second-slide slide" interval={500}>
        <Carousel.Caption>
          <h3>
            Depot Helping To Grow Your{" "}
            <span style={{ color: "#f0e246" }}>Business.</span>
          </h3>
          <p>Let Us Help You to Find a Solution That Meets Your Needs.</p>
          <button
            className="buttons buttons-hover"
            style={{
              marginBottom: "100px",
              fontSize: "18px",
              borderRadius: "35px",
              padding: "10px 20px",
            }}
          >
            Our Services
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="thread-slide slide">
        <Carousel.Caption>
          <h3>
            Depot Delivering solid plans to{" "}
            <span style={{ color: "#f0e246" }}>success!</span>
          </h3>
          <p>Kick off your business in the right way with our solutions.</p>
          <button
            className="buttons buttons-hover"
            style={{
              marginBottom: "100px",
              fontSize: "18px",
              borderRadius: "35px",
              padding: "10px 20px",
            }}
          >
            Our Services
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default banner;
