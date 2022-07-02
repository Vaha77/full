const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const hauz = require(".hauz");

app.get("/", (req, res, next) => {
  res.json(hauz);
});
// { id: 1, name: "Rakhimov", title: "Vaxa1" },
//     { id: 2, name: "Rakhimo", title: "Vaxa2" },
//     { id: 3, name: "Rakhim", title: "Vaxa3" },
//     { id: 4, name: "Rakhi", title: "Vaxa4" },
//     { id: 5, name: "Rakh", title: "Vaxa5" },
//     { id: 6, name: "Rak", title: "Vaxa6" },
//     { id: 7, name: "Ra", title: "Vaxa7" }

// app.get("/", (req, res) => {
// res.send("salom");
// res.json({
//   name: "Rakhimov",
//   title: "Vaxa",
// });
// res.sendFile("./package.json", { root: __dirname });
// res.download("./bk.jpg");
// });

app.listen(3002, () => console.log("server yurdi"));
