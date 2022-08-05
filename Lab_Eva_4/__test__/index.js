const request = require('supertest');
const assert = require('assert');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());


const personas = ["Maria", "Matias", "Antonio", "Clarissa"];
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});
app.post("/", (req, res) => {
  return res.json(personas);
});


module.exports = app;


