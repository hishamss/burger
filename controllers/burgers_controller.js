var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function (req, res) {
  burger.all(function (data) {
    console.log(data);
  });
});

module.exports = router;
