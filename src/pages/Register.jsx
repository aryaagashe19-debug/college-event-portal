import { useState } from "react";
import QRCode from "qrcode";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: ""
  });

  const [qrImage, setQrImage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const qrData = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event: ${formData.event}
`;

    try {
      const url = await QRCode.toDataURL(qrData);
      setQrImage(url);
    } catch (err) {
      console.error(err);
    }
  };

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
            type="text"
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

          <button type="submit">Generate QR</button>
        </form>

        {qrImage && (
          <div style={{ marginTop: "20px" }}>
            <h3>Your Event QR Code:</h3>
            <img src={qrImage} alt="QR Code" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;