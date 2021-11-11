import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import "./LoginFormModal.css";

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(sessionActions.loginUser({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };
  return (
    <div className="loginModal">
      <form onSubmit={handleSubmit} className="loginModalForm">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <input
          placeholder="username"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
export default LoginForm;
