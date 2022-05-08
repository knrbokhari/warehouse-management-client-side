import React from "react";
import { Form } from "react-bootstrap";

const Contact = () => {
  const hendelSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <div className="container">
      <h1 className="text-center my-5">Contact Us</h1>
      <div className="">
        <h2 className="text-center mb-2">
          We Are Ready to Discuss Everything in Person or at a Meeting
        </h2>
        <p style={{ color: "#909090" }} className="fs-5 text-center mb-5">
          Need safe, affordable, state-of-the-art storage facilities or one of
          the best pick-up and distribution services
        </p>
        <div className="row justify-content-center">
          <div className="col-11 col-sm-4 mb-4">
            <h3>Address</h3>
            <p style={{ color: "#909090" }} className="fs-5 m-0">
              elephant road, al-baraka tower, Dhaka.
            </p>
            <p style={{ color: "#909090" }} className="fs-5 m-0">
              suit #d-1 (13th floor), 1205
            </p>
          </div>
          <div className="col-11 col-sm-4 mb-4">
            <h3>Phone</h3>
            <p style={{ color: "#909090" }} className="fs-5 m-0">
              +8801752-525252
            </p>
            <p style={{ color: "#909090" }} className="fs-5 m-0">
              +8801752-525252
            </p>
          </div>
          <div className="col-11 col-sm-4 mb-4">
            <h3>E-mail</h3>
            <p style={{ color: "#909090" }} className="fs-5 m-0">
              kazayahn@gmail.com
            </p>
            <p style={{ color: "#909090" }} className="fs-5 m-0">
              www.kazinaeem.com
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-11 col-sm-6">
            <h3>Want to use our services?</h3>
            <p style={{ color: "#909090" }} className="fs-5">
              Don't hesitate to get in touch with us! We love the challenge of
              turning your ideas into reality and are always ready to talk
              through any message.
            </p>
          </div>
          <div className="col-11 col-sm-6">
            <Form onSubmit={hendelSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  className="fs-5"
                  type="text"
                  placeholder="Full Name *"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="fs-5"
                  type="email"
                  placeholder="Email *"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="fs-5"
                  type="number"
                  placeholder="Phone"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="fs-5"
                  type="text"
                  placeholder="Address"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  className="fs-5"
                  as="textarea"
                  rows={3}
                  placeholder="Full Name *"
                />
              </Form.Group>
              <button className="buttons rounded-pill px-5 py-3 fs-5 buttons-hover mb-5">
                SUBMIT
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
