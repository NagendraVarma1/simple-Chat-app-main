const express = require("express");

const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    `<h1>Login Page</h1><form action="/login" method="POST" onSubmit="localStorage.setItem('username', document.getElementById('username').value)">
    <input type='text' name='username' id='username'/>
    <button type='submit'>Enter</button>
    </form>`
  );
});

router.post("/login", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
