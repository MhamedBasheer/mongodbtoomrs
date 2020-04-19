const express = require('express')
const router = express.Router();

var facility = require("../controllers/FacilityController.js");

// Get all facilities
router.get('/', function(req, res) {
  facility.list(req, res);
});

// Get single facility by id
router.get('/show/:id', function(req, res) {
  facility.show(req, res);
});

// // Create employee
// router.get('/create', function(req, res) {
//   facility.create(req, res);
// });

// // Save employee
// router.post('/save', function(req, res) {
//   facility.save(req, res);
// });

// Edit employee
router.get('/edit/:id', function(req, res) {
  facility.edit(req, res);
});

// Edit update
router.post('/update/:id', function(req, res) {
  facility.update(req, res);
});

// // Edit update
// router.post('/delete/:id', function(req, res, next) {
//   facility.delete(req, res);
// });

module.exports = router;