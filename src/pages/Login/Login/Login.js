import React, { useRef, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  // handle Modal
  const [show, setShow] = useState(false);
  const emailRef = useRef("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // login user using email & password
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email && password) {
      signInWithEmailAndPassword(email, password);
      // reset input field
      e.target.reset();
    }
  };

  // Forget Password
  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      setShow(false);
      await sendPasswordResetEmail(email);
      setTimeout(alert("Sent email"), 1000);
    } else {
      alert("please enter your email address");
    }
  };
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
            onClick={() => signInWithGoogle()}
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
          <Form onSubmit={handleLogin} style={{ width: "100%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-5">Email address</Form.Label>
              <Form.Control
                required
                className="fs-5"
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fs-5">Password</Form.Label>
              <Form.Control
                required
                className="fs-5"
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <button
              onClick={handleShow}
              className="btn btn-link fs-5 p-0 mb-3 bg-transparent border-0"
            >
              Forget Password?
            </button>

            {/* module start */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Forget Password?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="fs-5">Email address</Form.Label>
                    <Form.Control
                      type="email"
                      ref={emailRef}
                      placeholder="name@example.com"
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="justify-content-center">
                <button
                  style={{
                    height: "32px",
                    padding: "0 20px",
                    borderRadius: "5px",
                  }}
                  className="buttons buttons-hover"
                  onClick={handleForgetPassword}
                >
                  Send
                </button>
              </Modal.Footer>
            </Modal>
            {/* module end */}

            <br />
            <button
              className="w-100 d-block buttons buttons-hover m-0 fs-5 p-2"
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
