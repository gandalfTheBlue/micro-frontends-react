import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Micro-frontends</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            React app 1
          </NavItem>
          <NavItem eventKey={2} href="#">
            React app 2
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
