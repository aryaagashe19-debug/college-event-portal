import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to College Event Portal 🎉</h1>
      <p>Register for upcoming college events</p>

      <div className="btn-group">
        <button
          className="btn btn-yellow"
          onClick={() => navigate("/events")}
        >
          View Events
        </button>

        <button
          className="btn btn-blue"
          onClick={() => navigate("/register")}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Home;