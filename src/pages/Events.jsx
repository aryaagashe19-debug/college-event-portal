function Events({ events, setEvents }) {
  const joinEvent = (id) => {
    const updatedEvents = events.map((event) =>
      event.id === id
        ? { ...event, joined: event.joined + 1 }
        : event
    );

    setEvents(updatedEvents);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Available Events</h2>

      {events.length === 0 && <p>No events available</p>}

      {events.map((event) => (
        <div key={event.id} style={styles.card}>
          <h4>{event.name}</h4>
          <p>Joined: {event.joined}</p>
          <button onClick={() => joinEvent(event.id)}>
            Join
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    marginTop: "15px",
    padding: "15px",
    background: "#f4f4f4",
  },
};

export default Events;