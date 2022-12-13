const router = require("express").Router();
const pool = require("../database");
const bcrypt = require("bcrypt");

//register new user
router.post("/register", async (req, res) => {
  try {
    // 1. destructure the req.body (name, email, password)
    const { username, email, password } = req.body;

    // 2. check if user exists (if user exists throw error)
    const user = await pool.query("SELECT * FROM users WHERE email= $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }

    res.json(user.rows);

    // 3. bcrypt the user password

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    // 4. insert new user inside the database

    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, bcryptPassword]
    );

    res.json(newUser.rows[0]);
    // 5. generate jwt token
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
