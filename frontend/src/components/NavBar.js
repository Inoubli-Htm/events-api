import React from "react";
import { Container, Nav, Navbar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar({ getTitle }) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            EventSphere
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/events">
              Evenements
            </Nav.Link>
          </Nav>
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
    </>
  );
}

export default NavBar;
