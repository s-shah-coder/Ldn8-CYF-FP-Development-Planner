import React from "react";

function Login({ setAuth }) {
  return (
    <>
      <main>
        <form>
          <h1>Login</h1>
          <label>Username</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <button type="button" onClick={() => setAuth(true)}>
            login
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;
