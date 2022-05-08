import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="my-5">
      <div className="position-relative">
        <img src="https://i.ibb.co/drSQmjn/404.jpg" alt="" className="w-100" />
        <div className="not-found   position-absolute top-0 mx-auto">
          <div className="container-fluid">
            <h2 className="ps-5 pt-5 mt-5">Page Not Found</h2>
            <p className="ps-5 m-0 fs-5">
              We're sorry, but we can't find the page you were looking for.
            </p>
            <p className="ps-5 m-0 fs-5">
              Go{" "}
              <Link to="/" className="text-decoration-none text-danger">
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
