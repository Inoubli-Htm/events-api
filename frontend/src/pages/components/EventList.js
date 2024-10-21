import React from "react";
import { Row, Col } from "react-bootstrap";
import EventCard from "../../components/EventCard";

const EventList = ({ events, onDelete, refreshEvents }) => (
  <Row>
    {events.map((event) => (
      <Col key={event.id} md={3} className="mb-4">
        <EventCard
          event={event}
          onDelete={() => onDelete(event.id)}
          refreshEvents={refreshEvents}
        />
      </Col>
    ))}
  </Row>
);

export default EventList;
