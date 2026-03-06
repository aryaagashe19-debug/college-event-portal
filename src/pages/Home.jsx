import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to College Event Portal 🎉</h1>
      <p>Register for upcoming college events</p>

      <div style={{ marginTop: "30px" }}>
        <Link to="/events">
          <button style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "orange",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}>
            View Events
          </button>
        </Link>

        <Link to="/register">
          <button style={{
            padding: "10px 20px",
            backgroundColor: "darkblue",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}>
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
}