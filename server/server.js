// 1. Testing Array of names (It's working!)

// const express = require("express");
// const app = express();

// app.get("/api", (req, res) => {
//   res.json({
//     users: ["Lorenzo", "Barath", "Ali", "Douglas", "Helen", "Saf", "Test"],
//   });
// });

// app.listen(5000, () => console.log("Server started on port 5000"));

//
// 2 . Testing PostgreSQL with Postman

const express = require("express")
const cors = require("cors")
const pool = require("./database")

const app = express()

app.use(express.json())
app.use(cors())

app.post("/addUser", (req, res) => {
    const username = req.body["username"]
    const password = req.body["password"]

    console.log("Username:" + username)
    console.log("Password:" + password)

    const insertSTMT = `INSERT INTO users (username, password) VALUES ( '${username}', '${password}');`;

    pool.query(insertSTMT).then((response) => {
        console.log("Data Saved");
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })

    console.log(req.body)
    res.send("Response Received" + req.body)
})

app.listen(4000, () => console.log("Server on localhost:4000"))



