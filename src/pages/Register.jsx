return (
  <div className="container">
    <div className="card">
      <h2>🎉 Event Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
        >
          <option value="">Select Event</option>
          <option value="Tech Fest 2026">Tech Fest 2026</option>
          <option value="Hackathon">Hackathon</option>
          <option value="Cultural Night">Cultural Night</option>
          <option value="Sports Meet">Sports Meet</option>
        </select>

        <button type="submit">Register Now</button>
      </form>
    </div>
  </div>
);