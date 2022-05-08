import React from "react";
import { Form } from "react-bootstrap";

const Footer = () => {
  const hendelSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div style={{ backgroundColor: "#3f3f3f" }}>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-6">
            <h3 className="text-white mb-4">CONTACT US</h3>
            <p className="text-white fs-5">
              Expeditor Inc. <br />
              elephant road, al-baraka tower, Dhaka.
              <br />
              suit #d-1 (13th floor), 1205
            </p>
            <p className="text-white fs-5 mb-0">+8801752-525252</p>
            <p className="text-white fs-5">kazinaeemrayahn@gmail.com</p>
          </div>
          <div className="col-11 col-sm-6">
            <h3 className="text-white">NEWSLETTER SIGN UP</h3>
            <p className="text-white fs-5">
              Sign up to our newsletter and get exclusive offers and news you
              wont find anywhere else straight to your inbox!
            </p>
            <Form onSubmit={hendelSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control
                  className="fs-5"
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>
              <button className="btn btn-danger fs-5">Sign Up</button>
            </Form>
          </div>
        </div>
      </div>

      <p className="text-white text-center fs-5 m-0 p-5">
        Copyright &copy;{new Date().getFullYear()} All rights reserved | This
        website made by <strong>Kazi naeem Rayhan</strong>
      </p>
    </div>
  );
};

export default Footer;
