import { Navigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function login(ev) {
    console.error("Error:");

    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:8081/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        setRedirect(true);
      } else {
        alert("Wrong Credentials");
      }
    } catch (e) {
      console.error("Error registering:", e);
    }
  }

  if (redirect) {
    console.log("Redirecting");
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={login}>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />

        <button>Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
