const express = require("express");

// Constonts
const PORT = 4000;
const HOST = "0.0.0.0";

// User Data
const Users = [
  {
    id: 0,
    name: "John",
  },
  {
    id: 1,
    name: "Anne",
  },
];

// App
const app = express();

// Router Handler
app.get("/users", (req, res) => {
  res.send("Hello, world!");
});

app.get("/users/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const user = Users[userId];

  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404); // error code return
  }
});

app.get("/", (res) => {
  res.send("Hello, World");
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
