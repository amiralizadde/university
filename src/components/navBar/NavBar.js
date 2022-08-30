import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container fluid className="">
          <img
            src={require("../../image/OMM Group arm.png")}
            id="imgArm"
            alt=""
          />
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="bg-dark "
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="w-100 d-flex justify-content-end"
              style={{ width: "auto" }}
            >
              <NavLink
                to="/"
                className={(link) =>
                  link.isActive
                    ? "itemNav bg-light p-2 m-2"
                    : "itemNoActive p-2 m-2 fw-bold"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/People"
                className={(link) =>
                  link.isActive
                    ? "itemNav bg-light p-2 m-2"
                    : "itemNoActive p-2 m-2 fw-bold"
                }
              >
                People
              </NavLink>
              <NavLink
                to="/Research"
                className={(link) =>
                  link.isActive
                    ? "itemNav bg-light p-2 m-2"
                    : "itemNoActive p-2 m-2 fw-bold"
                }
              >
                Research
              </NavLink>
              <NavLink
                to="/Publication"
                className={(link) =>
                  link.isActive
                    ? "itemNav bg-light p-2 m-2"
                    : "itemNoActive p-2 m-2 fw-bold"
                }
              >
                Publications
              </NavLink>
              <NavLink
                to="/Teaching"
                className={(link) =>
                  link.isActive
                    ? "itemNav bg-light p-2 m-2"
                    : "itemNoActive  p-2 m-2 fw-bold"
                }
              >
                Teaching
              </NavLink>
              <NavLink
                to="/Gallery"
                className={(link) =>
                  link.isActive
                    ? "itemNav bg-light p-2 m-2"
                    : "itemNoActive p-2 m-2 fw-bold"
                }
              >
                Gallery
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
