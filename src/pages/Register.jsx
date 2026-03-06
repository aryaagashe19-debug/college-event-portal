import { useState } from "react";
import QRCode from "qrcode";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
  });

  const [qrCode, setQrCode] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerateQR = async (e) => {
    e.preventDefault();

    const data = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event: ${formData.event}
    `;

    try {
      const url = await QRCode.toDataURL(data);
      setQrCode(url);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 QR Download Function
  const downloadQR = () => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "event-qr-code.png";
    link.click();
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Event Registration Form</h2>

        <form onSubmit={handleGenerateQR}>
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

          <button type="submit">Generate QR</button>
        </form>

        {qrCode && (
          <>
            <h3>Your Event QR Code:</h3>
            <img src={qrCode} alt="QR Code" />

            <button onClick={downloadQR}>
              Download QR
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Register;