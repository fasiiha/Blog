import { useState } from "react";
import "./Register.css";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev: { preventDefault: () => void; }){
    
    ev.preventDefault();
    await fetch('http://localhost:8081/signup', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'}
    })
  }

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={register}>
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

export default Register;
