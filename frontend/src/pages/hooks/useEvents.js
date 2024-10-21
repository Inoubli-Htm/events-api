import { useState, useEffect } from "react";
import axios from "axios";

const useEvents = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:7000/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des événements:", error);
    }
  };

  const deleteEvent = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'événement:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return { events, fetchEvents, deleteEvent };
};

export default useEvents;
