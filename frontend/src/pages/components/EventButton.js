import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const EventButton = ({ text, to, variant = "primary", size = "lg" }) => (
  <Button variant={variant} size={size} as={Link} to={to}>
    {text}
  </Button>
);

export default EventButton;
