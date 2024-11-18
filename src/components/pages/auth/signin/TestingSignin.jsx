import { useState } from "react";
import axios from "axios";

const TestingSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send credentials to NextAuth API for authentication
      const response = await axios.post(
        "http://localhost:3000/api/auth/callback/credentials",
        {
          email,
          password,
        },
        {
          withCredentials: true, // Make sure cookies (JWT) are sent
        }
      );

      if (response.data.error) {
        setError(response.data.error);
      } else {
        // Successful login
        console.log("Logged in successfully:", response.data);
        // Redirect or update state (e.g., saving user data or token)
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong, please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default TestingSignin;
