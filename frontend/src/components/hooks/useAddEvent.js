import { useState } from "react";
import axios from "axios";

const useAddEvent = (refreshEvents, handleClose) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEvent = { title, description, date, category };
      await axios.post("http://localhost:7000/events", newEvent);
      refreshEvents();
      resetForm();
      handleClose();
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'événement:", error);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setDate("");
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    category,
    setCategory,
    date,
    setDate,
    handleSubmit,
  };
};

export default useAddEvent;
