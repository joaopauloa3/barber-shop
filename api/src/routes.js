const express = require("express");

const routes = express.Router();
const users = [
  {
    id: 1,
    name: "João",
    email: "admin@admin.com",
    password: "1234",
  },
];

routes.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return res.status(200).json(user.name);
  }
  return res.status(401).json("Invalid credentials");
});

module.exports = routes;
