import React from "react";
import { Card } from "react-bootstrap";

const EventDetails = ({ title, description, date, category }) => {
  return (
    <>
      <Card.Title className="text-center">{title}</Card.Title>
      <Card.Text>
        <strong>Description :</strong> {description}
      </Card.Text>
      <Card.Text>
        <strong>Date :</strong> {new Date(date).toLocaleDateString()}
      </Card.Text>
      <Card.Text>
        <strong>Catégorie :</strong> {category}
      </Card.Text>
    </>
  );
};

export default EventDetails;
