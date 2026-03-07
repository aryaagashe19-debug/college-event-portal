import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Volunteer from "./pages/Volunteer";

function App() {
  const [events, setEvents] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/events"
          element={<Events events={events} setEvents={setEvents} />}
        />
        <Route
          path="/admin"
          element={<Admin events={events} setEvents={setEvents} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </Router>
  );
}

export default App;