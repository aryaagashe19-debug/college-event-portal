import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name, email };

    // Save data in localStorage
    localStorage.setItem("eventUser", JSON.stringify(userData));

    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Event Registration 📝</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: "10px", margin: "10px", width: "250px" }}
          />
          <br />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: "10px", margin: "10px", width: "250px" }}
          />
          <br />

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h2>Registration Successful ✅</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>

          <div style={{ marginTop: "20px" }}>
            <QRCodeCanvas
              value={`Name: ${name}, Email: ${email}`}
              size={200}
            />
          </div>
        </div>
      )}
    </div>
  );
}