const router = require("express").Router();
const pool = require("../database");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

//register new user
router.post("/register", async (req, res) => {
  try {
    // 1. destructure the req.body (name, email, password)
    const { username, email, password } = req.body;
    console.log(username);
    // 2. check if user exists (if user exists throw error)
    const user = await pool.query("SELECT * FROM users WHERE email= $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }

    // // 3. bcrypt the user password

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    // 4. insert new user inside the database

    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, bcryptPassword]
    );

    // res.json(newUser.rows[0]);
    // 5. generate jwt token

    const token = jwtGenerator(newUser.rows[0].id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//login route

router.post("/login", async (req, res) => {
  try {
    // 1. destructure the req.body

    const { email, password } = req.body;

    // 2. check if user doesn't exist (if not then throw error)

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Credentials incorrect");
    }
    // 3. check if incoming password is the same as the database password

    const validPassword = bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json("credentials incorrect");
    }
    console.log(validPassword);

    // 4. generate jwt token

    const token = jwtGenerator(user.rows[0].id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
