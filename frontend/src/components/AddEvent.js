import React from "react";
import { Modal } from "react-bootstrap";
import useAddEvent from "./hooks/useAddEvent";
import EventForm from "./forms/EventForm";

const AddEvent = ({ show, handleClose, refreshEvents }) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    category,
    setCategory,
    date,
    setDate,
    handleSubmit,
  } = useAddEvent(refreshEvents, handleClose);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un Événement</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EventForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          category={category}
          setCategory={setCategory}
          date={date}
          setDate={setDate}
          handleSubmit={handleSubmit}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddEvent;
