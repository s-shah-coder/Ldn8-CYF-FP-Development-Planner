import React, { useState } from "react";

function Register({ setAuth }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password, username };
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-TYpe": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      localStorage.setItem("token", parseRes.token);
      console.log(parseRes);

      setAuth(true);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <main>
        <form onSubmit={onSubmitForm}>
          <h1>Signup</h1>

          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <button>Submit</button>
        </form>
      </main>
    </>
  );
}

export default Register;
