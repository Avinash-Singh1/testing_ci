const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Node.js CI is working!" });
});

module.exports = app;