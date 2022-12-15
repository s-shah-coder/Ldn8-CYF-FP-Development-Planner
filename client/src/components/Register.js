import React from "react";

function Register() {
  return (
    <>
      <main>
        <form>
          <h1>Signup</h1>
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Username</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <label>Retype password</label>
          <input type="password" />
          <label>Email</label>
          <input type="email" />
          <button type="button">Submit</button>
        </form>
      </main>
    </>
  );
}

export default Register;
