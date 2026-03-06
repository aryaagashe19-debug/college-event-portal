function Events() {
  const events = [
    {
      name: "Tech Fest 2026",
      date: "12 Jan 2026",
      description: "A national level technical festival."
    },
    {
      name: "Hackathon",
      date: "25 Feb 2026",
      description: "24-hour coding competition."
    },
    {
      name: "Cultural Night",
      date: "10 Mar 2026",
      description: "Music, dance and performances."
    },
    {
      name: "Sports Meet",
      date: "05 Apr 2026",
      description: "Annual inter-college sports event."
    }
  ];

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Upcoming Events</h2>

        {events.map((event, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;