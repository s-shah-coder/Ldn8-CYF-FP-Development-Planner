module.exports = (req, res, next) => {
  const { email, username, password } = req.body;

  function validEmail(userEmail) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail);
  }

  if (req.path === "/register") {
    console.log(!email.length);

    if (![email, username, password].every(Boolean)) {
      return res.status(401).json("Missing credentials");
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid email");
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.status(401).json("Missing credentials");
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid email");
    }
  }

  next();
};
