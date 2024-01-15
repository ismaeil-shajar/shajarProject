// src/index.js
const fs = require("fs");
const path = require("path");

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, "pages")));

app.get("/", (req, res) => {
  fs.readFile(
    path.join(__dirname, "pages/test.html"),
    "utf8",
    function (err, data) {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }
      res.send(data);
    }
  );
  //   res.send("");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
