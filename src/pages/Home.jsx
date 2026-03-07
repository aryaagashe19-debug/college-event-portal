import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Welcome to College Event Portal 🎉
      </h1>

      <p style={styles.subtext}>
        Register for upcoming college events
      </p>

      <div>
        <button
          style={styles.primaryBtn}
          onClick={() => navigate("/events")}
        >
          View Events
        </button>

        <button
          style={styles.secondaryBtn}
          onClick={() => navigate("/register")}
        >
          Register Now
        </button>
      </div>

      <button
        style={styles.loginBtn}
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
    color: "white",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "10px",
  },
  subtext: {
    marginBottom: "20px",
  },
  primaryBtn: {
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "#ff7e5f",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  secondaryBtn: {
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "#feb47b",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  loginBtn: {
    marginTop: "20px",
    padding: "8px 18px",
    backgroundColor: "white",
    color: "#1e3c72",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Home;