import Particles from "./components/Particles.jsx";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import LandPage from "./pages/LandPage.js";
import Events from "./pages/Events.js";
import Footer from "./components/Footer.js";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const getTitle = (title) => {
    setTitle(title);
    navigate("/events");
  };
  return (
    <div className="App">
      <NavBar getTitle={getTitle} />
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/events" element={<Events title={title} />} />
      </Routes>
      <Footer />
      <Particles />
    </div>
  );
}

export default App;
