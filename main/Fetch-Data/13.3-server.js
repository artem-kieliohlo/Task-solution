// const express = require("express");
// const formidable = require("formidable");
// const cors = require("cors");
// const app = express();

import express from "express";
import formidable from "formidable";
import cors from "cors";
const port = 8080;
const app = express();
app.use(cors());
app.get("/", (req, res) =>
  res.send("Example server for receiving JS POST requests")
);
app.post("/", (req, res) => {
  const form = formidable();
  form.parse(req, (err, fields) => {
    if (err) {
      return;
    }
    console.log("POST body:", fields);
    res.sendStatus(200);
  });
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
