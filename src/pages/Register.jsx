import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxkV9Xlc_I4Zdb_-FOBh8eyKeyIkJyXTRMgHj0vvvtprZa39NADsfG9iHDzlrQK-D4V/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (result.status === "success") {
      alert("Registration Successful 🎉");
      setFormData({ name: "", email: "", phone: "", event: "" });
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Event Registration Form</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="event"
          placeholder="Event Name"
          value={formData.event}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}