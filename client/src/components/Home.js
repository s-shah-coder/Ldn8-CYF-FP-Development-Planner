import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>

      <Link to="/login">
        <button> Login</button>
      </Link>
      <Link to="/register">
        <button>Signup</button>
      </Link>
    </>
  );
}

export default Home;
