import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard.js";
import { Container, Row, Button, Col, Pagination } from "react-bootstrap";
import axios from "axios";
import AddEvent from "../components/AddEvent.js";

const Events = ({ title }) => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:7000/events");

      setEvents(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des événements:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const refreshEvents = () => fetchEvents();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/events/${id}`);
      refreshEvents();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'événement:", error);
    }
  };

  // Filtrer les événements en fonction de la recherche
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(title.toLowerCase().trim()) ||
      event.description.toLowerCase().includes(title.toLowerCase().trim()) ||
      event.category.toLowerCase().includes(title.toLowerCase().trim())
  );

  // Logique pour gérer les événements à afficher
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  // Calculer le nombre total de pages en fonction des événements filtrés
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="mt-5">
      <Button variant="primary" onClick={handleShow} className="mb-3">
        Ajouter un Événement
      </Button>
      <AddEvent
        show={showModal}
        handleClose={handleClose}
        refreshEvents={refreshEvents}
      />
      <Row>
        {currentEvents.map((event) => (
          <Col key={event.id} md={3} className="mb-4">
            <EventCard
              event={event}
              refreshEvents={refreshEvents}
              onDelete={() => handleDelete(event?.id)}
            />
          </Col>
        ))}
      </Row>

      <Pagination className="justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Events;
