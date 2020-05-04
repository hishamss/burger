var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
  burger.all(function (data) {
    // console.log(data);
    res.render("index", { burger: data });
  });
});

router.post("/api/burger", function (req, res) {
  console.log("POST request: ", req.body.newburger);
  burger.add("burgers", "burger_name", req.body.newburger, function (result) {
    res.json({ id: result.insertId });
  });
});
module.exports = router;
