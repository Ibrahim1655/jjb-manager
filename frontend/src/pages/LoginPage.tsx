import React, { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent,
    email: string,
    password: string,
  ) => {
    e.preventDefault();
    const log = await login(email, password);
    if (log) {
      localStorage.setItem("access_token", log.data.access_token);
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <form action="">
        <label>Mail:</label>
        <input value={email} onChange={handleEmail} />
        <label>Password</label>
        <input value={password} onChange={handlePassword} />
        <button type="submit" onClick={(e) => handleSubmit(e, email, password)}>
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
