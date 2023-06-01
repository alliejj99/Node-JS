const express = require("express");

// constonts
const PORT = 4000;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (res) => {
  res.send("Hello, World");
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
