const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("messages.txt", (err, data) => {
    if (err) {
      data = "No Chat Exists";
    }
    res.send(
      `<h1>Home Page</h1>
      ${data}
        <form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" name="message"/>
        <input type="hidden" id="username" name="username"/>
        <button type="submit">Send</button>
        </form>`
    );
  });
});

router.post("/", (req, res, next) => {
  fs.writeFile(
    "messages.txt",
    `${req.body.username}: ${req.body.message}, `,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/");
    }
  );
});

module.exports = router;
