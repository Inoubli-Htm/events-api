import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import "./css/EventCard.css";
import UpdateEvent from "./UpdateEvent.js";

const EventCard = ({ event, refreshEvents, onDelete }) => {
  const { title, description, date, category } = event;

  const handleDelete = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) {
      onDelete();
    }
  };

  return (
    <Card className="event-card">
      <Card.Body>
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

        <ButtonGroup className="action-buttons d-flex justify-content-between mt-3">
          <UpdateEvent event={event} refreshEvents={refreshEvents} />
          <Button size="sm" variant="outline-danger" onClick={handleDelete}>
            Supprimer
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
