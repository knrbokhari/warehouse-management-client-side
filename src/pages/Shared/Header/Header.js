import React from "react";
import Logo from "../../../Logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../../../hooks/CustomLink";
import { Link } from "react-router-dom";
import "./Header.css";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link to="/">
            <img src={Logo} alt="" width="140px" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <CustomLink className="fs-3 px-3 fw-bold" to="/">
                Home
              </CustomLink>
              <CustomLink className="fs-3 px-3 fw-bold" to="/inventory">
                Inventory
              </CustomLink>
              <CustomLink className="fs-3 px-3 fw-bold" to="/about">
                About
              </CustomLink>
              <CustomLink className="fs-3 px-3 fw-bold" to="/blog">
                Blog
              </CustomLink>
            </Nav>
            <Nav>
              {user ? (
                <button
                  onClick={logout}
                  className="fs-3 bg-transparent border-0 px-3 p-0 fw-bold"
                  style={{ color: "#275aa9", width: "110px" }}
                >
                  Log out
                </button>
              ) : (
                <CustomLink className="fs-3 px-3 fw-bold" to="/login">
                  Login
                </CustomLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
