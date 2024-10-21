import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import EventButton from "./components/EventButton";
import "./css/LandPage.css";

const LandPage = () => (
  <div className="landpage-background">
    <Container fluid className="text-center text-white">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={8}>
          <Header />
          <EventButton text="Voir les Événements" to="/events" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default LandPage;
