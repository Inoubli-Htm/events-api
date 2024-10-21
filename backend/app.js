const express = require("express");
const eventsRoutes = require("./routes/eventsRoute");
const cors = require("cors");

const app = express();
const PORT = 7000;

app.use(cors());
app.use(express.json());

// Utilisation des routes
app.use("/events", eventsRoutes);

// Gestion d'erreur globale
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
