const express = require("express");
const fs = require("fs");
// const path = require("path");

const server = express();
const port = 3000;

server.get("/", (req, res) => {
  console.warn(req.params);
  console.warn(req.query);
  res.send("Hello World!");
});

server.get("/list-files", (req, res) => {
  fs.readdir("./", (err, files) => {
    files.forEach((file) => {
      console.log(file);
    });
    res.send(files);
  });
});

server.post("/", (req, res) => {
  res.send("Got a POST request");
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
