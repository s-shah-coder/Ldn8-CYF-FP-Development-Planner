import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SignupConfirmation() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Signup Confirmation</h1>
      <Link to="/login">Login</Link>
      <button onClick={() => navigate(-1)}>back</button>
    </>
  );
}

export default SignupConfirmation;
