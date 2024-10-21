const { v4: uuidv4 } = require("uuid");

class Event {
  constructor(title, description, date, category) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.date = new Date(date).toISOString();
    this.category = category;
  }
}

module.exports = Event;
