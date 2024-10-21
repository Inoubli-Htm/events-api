import React from "react";
import { Container, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

function NavBar({ getTitle }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          EventSphere
        </Navbar.Brand>
        <NavLinks />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Recherche..."
            className="me-2"
            aria-label="Search"
            onChange={(e) => getTitle(e.target.value)}
          />
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
