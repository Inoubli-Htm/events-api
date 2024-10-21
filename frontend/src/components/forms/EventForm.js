import React from "react";
import { Form, Button } from "react-bootstrap";

const EventForm = ({
  title,
  setTitle,
  description,
  setDescription,
  category,
  setCategory,
  date,
  setDate,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Titre</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Entrez le titre"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Entrez la description"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Catégorie</Form.Label>
        <Form.Control
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Entrez la catégorie"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Ajouter
      </Button>
    </Form>
  );
};

export default EventForm;
