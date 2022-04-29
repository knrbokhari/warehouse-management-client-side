import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const banner = () => {
  return (
    <Carousel>
      <Carousel.Item className="fast-slide" interval={1000}>
        <Carousel.Caption>
          <h3>Distribution, Storage, Warehousing & Fulfillment.</h3>
          <p>
            Your solution for first class warehousing services for the goods,
            food, grocery, pharmaceutical and general commodity industries.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="second-slide" interval={500}>
        <Carousel.Caption>
          <h3>Depot Helping To Grow Your Business.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="thread-slide">
        <Carousel.Caption>
          <h3> Depot Delivering solid plans to success!</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default banner;
