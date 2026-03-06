import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Working ✅");
  };

  return (
    <div>
      <h2>Event Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
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
  );
}

export default Register;