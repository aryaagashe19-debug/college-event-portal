import React from "react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Tech Fest 2025",
      date: "10 April 2025",
      venue: "College Auditorium",
    },
    {
      id: 2,
      title: "Cultural Night",
      date: "15 April 2025",
      venue: "Main Ground",
    },
    {
      id: 3,
      title: "Hackathon",
      date: "20 April 2025",
      venue: "Computer Lab",
    },
  ];

  const styles = {
    container: {
      textAlign: "center",
      padding: "40px",
      minHeight: "100vh",
      background: "linear-gradient(to right, #1e3c72, #2a5298)",
      color: "white",
    },
    card: {
      background: "white",
      color: "black",
      margin: "20px auto",
      padding: "20px",
      width: "300px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Available Events</h1>

      {events.map((event) => (
        <div key={event.id} style={styles.card}>
          <h3>{event.title}</h3>
          <p><b>Date:</b> {event.date}</p>
          <p><b>Venue:</b> {event.venue}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;