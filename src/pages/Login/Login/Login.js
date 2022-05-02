import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7 d-none d-md-block">
          <div
            className="d-block w-100 h-100"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/gWkVnj7/photo-1556740758-90de374c12ad-ixlib-rb-1-2.jpg)",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="col-11 col-md-5">
          <Form style={{ width: "100%" }}>
            <h2 className="text-center" style={{ fontSize: "30px" }}>
              Login
            </h2>
            <p className="m-0 fs-5 text-center" style={{ color: "#6f6f6f" }}>
              See your growth and get consulting support!
            </p>
            <button
              className="d-flex justify-content-center align-items-center btn-google"
              style={{
                width: "85%",
                margin: "20px auto",
                borderRadius: "30px",
                background: "#fff",
                border: "1px solid #c1c1c1",
                padding: "7px",
              }}
            >
              <img
                src="https://i.ibb.co/WGDMJWq/hiclipart-com.png"
                alt=""
                width={21}
                style={{ marginRight: "10px" }}
              />
              <p className="m-0 fs-5 ">Sign in with Google</p>
            </button>
            <div className="d-flex align-items-center">
              <div
                style={{ borderBottom: "2px solid #dfdfdf", width: "40%" }}
              ></div>
              <div
                className="mx-3 fs-5 text-center"
                style={{ width: "365px", color: "#6f6f6f" }}
              >
                Or Sign in with Email
              </div>
              <div
                style={{ borderBottom: "2px solid #dfdfdf", width: "40%" }}
              ></div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-5">Email address</Form.Label>
              <Form.Control
                required
                className="fs-5"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fs-5">Password</Form.Label>
              <Form.Control
                required
                className="fs-5"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <button className="btn btn-link fs-5 p-0 mb-3 bg-transparent border-0">
              Forget Password?
            </button>
            <br />
            <button
              className="w-100 d-block fs-5 p-2"
              type="submit"
              style={{ borderRadius: "15px" }}
            >
              Login
            </button>
            <br />
            <p className="fs-5 mb-5">
              Not Registered yet?{" "}
              <Link to="/signup" className="text-decoration-none">
                Create an Account
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
