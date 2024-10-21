import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import EventDetails from "./EventDetails";
import "./css/EventCard.css";
import UpdateEvent from "./UpdateEvent.js";

const EventCard = ({ event, refreshEvents, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) {
      onDelete();
    }
  };

  return (
    <Card className="event-card">
      <Card.Body>
        <EventDetails
          title={event.title}
          description={event.description}
          date={event.date}
          category={event.category}
        />

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
