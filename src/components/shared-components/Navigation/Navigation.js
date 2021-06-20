import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="px-5 bg-brand main-nav"
      >
        <Navbar.Brand>
          <NavLink exact to="/" style={{ textDecoration: "none" }}>
            <h2 className="logo">JobMart</h2>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              exact
              className="nav-item"
              activeClassName="active-nav-item"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              exact
              className="nav-item"
              activeClassName="active-nav-item"
              to="/review"
            >
              Reviews
            </NavLink>
            <NavLink
              exact
              className="nav-item"
              activeClassName="active-nav-item"
              to="/admin"
            >
              Dashboard
            </NavLink>
            <NavLink
              exact
              className="nav-item"
              activeClassName="active-nav-item"
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
