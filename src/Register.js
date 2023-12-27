import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name is required");
      return;
    }

    if (name.length < 3) {
      alert("Name must be at least 3 characters long");
      return;
    }

    if (password === reEnterPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          auth.user.updateProfile({
            displayName: name,
          });
          if (auth) {
            navigate("/");
          }
        })
        .catch((error) => alert(error.message));
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="register__container">
        <h1>Create account</h1>
        <form>
          <h5>Your name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
          />

          <h5>Re-enter Password</h5>
          <input
            type="password"
            value={reEnterPassword}
            onChange={(e) => setReEnterPassword(e.target.value)}
          />

          <button type="submit" onClick={register} className="register__button">
            Register
          </button>
        </form>
        <p>
          By creating an account, you're <strong>not</strong> agreeing to
          Amazon's <strong>Clone</strong> Conditions of Use & Sale. Please see
          our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
