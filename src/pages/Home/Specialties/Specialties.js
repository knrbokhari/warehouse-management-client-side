import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./Specialties.css";

const Specialties = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              height: "60px",
            }}
            onClick={handleShow}
          >
            LEARN MORE
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="text-center">
                Request a Callback
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="text-center fs-5">
                We can email you in 90 seconds, just enter your email below
              </p>
              <Form>
                <Form.Group
                  className="mb-3 fs-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="text" placeholder="Name *" autoFocus />
                </Form.Group>
                <Form.Group
                  className="mb-3 fs-4"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="Email *" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <button
                style={{
                  height: "32px",
                  padding: "0 20px",
                  borderRadius: "5px",
                }}
                className="buttons buttons-hover"
                onClick={handleClose}
              >
                REQUEST
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Specialties;
