const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors());

const hauz = require("./hauz");

app.get("/", (req, res, next) => {
  res.json(hauz);
});
app.get("/house/all", (req, res, next) => {
  res.json(hauz);
});

app.listen(3005, () => console.log("server yurdi"));
