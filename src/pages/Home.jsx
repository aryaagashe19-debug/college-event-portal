import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to College Event Portal 🎉</h1>
      <p>Register for upcoming college events</p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/events")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer"
          }}
        >
          View Events
        </button>

        <button
          onClick={() => navigate("/register")}
          style={{
            padding: "10px 20px",
            margin: "5px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Home;