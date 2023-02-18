var path = require("path");
var hbs = require("hbs");
var express = require("express");

var app = express();
var rout = path.join(__dirname, "../public");
var rout2 = path.join(__dirname, "../prasyl/views");
var rout3 = path.join(__dirname, "../prasyl/pars");
app.set("views engin", "hbs");
app.set("views", rout2);
hbs.registerPartials(rout3);
app.use(express.static(rout));
app.get("/", (req, res) => {
  res.render("index.hbs");
});
app.get("/about", (req, res) => {
  res.render("about.hbs");
});
app.get("/weather", (req, res) => {
  res.render("wether.hbs");
});
app.get("*", (req, res) => {
  res.render("404.hbs", {
    con: "Opp! page Not Found",
  });
});
app.listen(2000, () => {
  console.log("live is ok");
});
