import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">
        Accueil
      </Nav.Link>
      <Nav.Link as={Link} to="/events">
        Evenements
      </Nav.Link>
    </Nav>
  );
};

export default NavLinks;
