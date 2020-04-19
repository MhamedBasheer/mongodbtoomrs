var express = require('express');
var router = express.Router();

var facility = require("../controllers/FacilityController.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  facility.list(req, res);
});

module.exports = router;
