import request from "supertest";
import express from "express";
import eventsRoutes from "../routes/eventsRoute.js"; 

const app = express();
app.use(express.json()); 
app.use("/events", eventsRoutes);

describe("Events API", () => {
  let eventId;

  // Test pour créer un nouvel événement
  it("should create a new event", async () => {
    const res = await request(app).post("/events").send({
      title: "Test Event",
      description: "This is a test event.",
      date: new Date().toISOString(), 
      category: "Test",
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toEqual("Test Event");
    eventId = res.body.id; 
  });

  // Test pour obtenir tous les événements
  it("should get all events", async () => {
    const res = await request(app).get("/events");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true); 
    expect(res.body.length).toBeGreaterThan(0); 
  });

  // Test pour obtenir un événement par ID
  it("should get an event by ID", async () => {
    const res = await request(app).get(`/events/${eventId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id", eventId);
  });

  // Test pour mettre à jour un événement
  it("should update an event", async () => {
    const res = await request(app).put(`/events/${eventId}`).send({
      title: "Updated Event",
      description: "This is an updated test event.",
      date: new Date().toISOString(), 
      category: "Test Updated",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual("Updated Event");
  });

  // Test pour supprimer un événement
  it("should delete an event", async () => {
    const res = await request(app).delete(`/events/${eventId}`);
    expect(res.statusCode).toEqual(204); 
  });

  // Test pour obtenir un événement non trouvé
  it("should return 404 for a non-existing event", async () => {
    const res = await request(app).get(`/events/${eventId}`);
    expect(res.statusCode).toEqual(404);
  });
});
