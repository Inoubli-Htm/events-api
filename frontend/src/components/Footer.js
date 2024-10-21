import React from "react";
import { Container } from "react-bootstrap";
import "./css/Footer.css";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <footer className="footer text-light">
      <hr className="my-2" />
      <Container fluid className="py-3">
        <FooterContent />
      </Container>
    </footer>
  );
};

export default Footer;
