import { useState } from "react";

function Admin({ events, setEvents }) {
  const [eventName, setEventName] = useState("");

  const addEvent = () => {
    if (eventName.trim() === "") return;

    const newEvent = {
      id: Date.now(),
      name: eventName,
      joined: 0,
    };

    setEvents([...events, newEvent]);
    setEventName("");
  };

  return (
    <div style={styles.container}>
      <h2>Admin Dashboard</h2>

      <input
        type="text"
        placeholder="Enter event name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        style={styles.input}
      />

      <button onClick={addEvent} style={styles.button}>
        Add Event
      </button>

      <h3>Event List</h3>

      {events.map((event) => (
        <div key={event.id} style={styles.card}>
          {event.name} - Joined: {event.joined}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { padding: "40px" },
  input: { padding: "8px", marginRight: "10px" },
  button: { padding: "8px 15px", cursor: "pointer" },
  card: {
    marginTop: "10px",
    padding: "10px",
    background: "#eee",
  },
};

export default Admin;