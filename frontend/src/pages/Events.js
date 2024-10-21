import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import AddEvent from "../components/AddEvent";
import EventList from "./components/EventList";
import EventPagination from "./components/EventPagination";
import useEvents from "./hooks/useEvents";

const Events = ({ title }) => {
  const { events, deleteEvent, fetchEvents } = useEvents();
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Filtrer les événements selon le titre
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(title.toLowerCase().trim()) ||
      event.description.toLowerCase().includes(title.toLowerCase().trim()) ||
      event.category.toLowerCase().includes(title.toLowerCase().trim())
  );

  // Gestion de la pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <Container className="mt-5">
      <Button variant="primary" onClick={handleShow} className="mb-3">
        Ajouter un Événement
      </Button>

      <AddEvent
        show={showModal}
        handleClose={handleClose}
        refreshEvents={fetchEvents}
      />

      <EventList
        events={currentEvents}
        onDelete={deleteEvent}
        refreshEvents={fetchEvents}
      />

      <EventPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

export default Events;
