import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const UpdateEventForm = ({ initialValues, onSubmit }) => {
  const [title, setTitle] = useState(initialValues.title || "");
  const [description, setDescription] = useState(
    initialValues.description || ""
  );
  const [category, setCategory] = useState(initialValues.category || "");
  const [date, setDate] = useState(initialValues.date.slice(0, 10) || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, category, date });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Titre</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enregistrer
      </Button>
    </Form>
  );
};

export default UpdateEventForm;
