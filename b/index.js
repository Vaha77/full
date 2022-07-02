const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017");

// const db = mongoose.connection;

db.on("connected", () => console.log("conected to mongodb"));
db.on("error", () => console.log("error"));
db.on("discounted", () => console.log("discounted"));

const hauz = require("./hauz");

app.get("/", (req, res, next) => {
  res.json(hauz);
});
app.get("/house/all", (req, res, next) => {
  res.json(hauz);
});

app.listen(3005, () => console.log("server yurdi"));
