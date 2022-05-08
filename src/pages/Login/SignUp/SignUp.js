import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import auth from "../../../firebase.init";

const SignUp = () => {
  const [signInWithGoogle, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [errors, setError] = useState("");

  // navigate & location for from
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // google user
  if (googleLoading) {
    navigate(from, { replace: true });
  }

  // google Error
  if (googleError) {
    setError(googleError?.message);
  }

  // sign up user using email & password
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate(from, { replace: true });
        }
        verifiEmail();
        alert("Verification email sent");
        // reset input field
        e.target.reset();
        setError("");
      })
      .catch((error) => {
        setError(error?.message);
      });
  };

  // Email Verification
  const verifiEmail = async () => {
    await sendEmailVerification(auth.currentUser);
    alert("Verification email sent");
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
            Sign Up
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
            <p className="m-0 fs-5 ">Sign up with Google</p>
          </button>
          <div className="d-flex align-items-center">
            <div
              style={{ borderBottom: "2px solid #dfdfdf", width: "40%" }}
            ></div>
            <div
              className="mx-3 fs-5 text-center"
              style={{ width: "365px", color: "#6f6f6f" }}
            >
              Or Sign up with Email
            </div>
            <div
              style={{ borderBottom: "2px solid #dfdfdf", width: "40%" }}
            ></div>
          </div>
          <Form onSubmit={handleSignUp} style={{ width: "100%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-5">Email address</Form.Label>
              <Form.Control
                className="fs-5"
                type="email"
                name="email"
                required
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fs-5">Password</Form.Label>
              <Form.Control
                className="fs-5"
                name="password"
                type="password"
                required
                placeholder="Password"
              />
            </Form.Group>
            <p className="my-2">{errors}</p>
            <button
              className="w-100 d-block buttons buttons-hover m-0 mt-4 fs-5 p-2"
              type="submit"
              style={{ borderRadius: "15px" }}
            >
              Sign Up
            </button>
            <br />
            <p className="fs-5 mb-5">
              Already have an Account?{" "}
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
