import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UpdateEventForm from "../forms/UpdateEventForm";
import axios from "axios";

const UseUpdateEventForm = ({ event, refreshEvents }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (updatedEvent) => {
    try {
      const { id } = event;
      await axios.put(`http://localhost:7000/events/${id}`, updatedEvent);
      refreshEvents();
      handleClose();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'événement:", error);
    }
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Editer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateEventForm onSubmit={handleSubmit} initialValues={event} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Enregistrer les modifications
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UseUpdateEventForm;
