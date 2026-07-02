import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await loginUser(email, password);

    if (!data.success) {
      console.log(data.message);
      return;
    }
    localStorage.setItem("token", data.token);
    navigate("/dashboard");
  }

  return (
    <div>
      Login page
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="test@gmail.com"
          type="text"
        ></input>

        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="abc123lol"
          type="password"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
