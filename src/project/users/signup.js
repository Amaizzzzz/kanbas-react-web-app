import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/users/account");
    } catch (err) {
      // Check if err.response exists before accessing err.response.data
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        // Handle other types of errors (like network errors)
        setError("An error occurred. Please try again.");
        console.error(err); // Log the error for debugging purposes
      }
    }
  };
  
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <input
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;