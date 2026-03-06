return (
  <div className="register-container">
    <div className="register-card">
      <h2>Event Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
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

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);