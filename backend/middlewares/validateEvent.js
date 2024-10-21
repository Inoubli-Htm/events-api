const validateEvent = (req, res, next) => {
  const { title, date, description, category } = req.body;
  if (!title || !date || !description || !category) {
    return res
      .status(400)
      .json({ message: "Tous les champs sont obligatoires." });
  }
  next();
};

module.exports = validateEvent;
