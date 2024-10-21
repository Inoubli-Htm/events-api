import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/LandPage.css";

const LandPage = () => {
  return (
    <div className="landpage-background">
      <Container fluid className="text-center text-white">
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={8}>
            <h1 className="display-4">Bienvenue sur notre Application</h1>
            <p className="lead">
              Découvrez les événements qui vous intéressent !
            </p>
            <Button variant="primary" size="lg" as={Link} to="/events">
              Voir les Événements
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandPage;
