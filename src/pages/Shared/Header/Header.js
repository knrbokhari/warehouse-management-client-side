import React from "react";
import Logo from "../../../Logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../../../hooks/CustomLink";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
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
              <CustomLink className="fs-3 px-3 fw-bold" to="/inventory/:id">
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
              <CustomLink className="fs-3 px-3 fw-bold" to="/login">
                Login
              </CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
