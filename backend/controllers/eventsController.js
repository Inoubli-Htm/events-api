const events = [];
const Event = require("../models/eventModel");

// Fonction pour créer un événement
exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, category } = req.body;

    const newEvent = new Event(title, description, date, category);

    events.push(newEvent);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la création de l'événement",
      error: error.message,
    });
  }
};

// Fonction pour récupérer tous les événements
exports.getAllEvents = (req, res) => {
  try {
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des événements",
      error: error.message,
    });
  }
};

// Fonction pour récupérer un événement par son ID
exports.getEventById = (req, res) => {
  const eventId = req.params.id;
  const event = events.find((e) => e.id === eventId);
  try {
    if (!event) {
      return res.status(404).json({ message: "Événement non trouvé" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération de l'événement",
      error: error.message,
    });
  }
};

// Fonction pour mettre à jour un événement
exports.updateEvent = (req, res) => {
  const eventId = req.params.id;
  const event = events.find((e) => e.id === eventId);
  try {
    if (!event) {
      return res.status(404).json({ message: "Événement non trouvé" });
    }
    const { title, description, category, date } = req.body;
    event.title = title;
    event.description = description;
    event.category = category;
    event.date = new Date(date).toISOString();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la mise à jour de l'événement",
      error: error.message,
    });
  }
};

// Fonction pour supprimer un événement
exports.deleteEvent = (req, res) => {
  const eventId = req.params.id;
  const index = events.findIndex((e) => e.id === eventId);
  try {
    if (index === -1) {
      return res.status(404).json({ message: "Événement non trouvé" });
    }
    events.splice(index, 1);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la suppression de l'événement",
        error: error.message,
      });
  }
};
