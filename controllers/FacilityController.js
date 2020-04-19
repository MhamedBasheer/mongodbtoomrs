var mongoose = require("mongoose");
var facility = require("../models/Facility");

var facilityController = {};

// Show list of facilities
facilityController.list = function(req, res) {
  facility.find({}).exec(function (err, facilities) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/index", {facilities: facilities});
    }
  });
};

// Show facility by id
facilityController.show = function(req, res) {
  facility.findOne({_id: req.params.id}).exec(function (err, facility) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/facilities/show", {facility: facility});
    }
  });
};

// // Create new facility
// facilityController.create = function(req, res) {
//   res.render("../views/facilities/create");
// };

// // Save new facility
// facilityController.save = function(req, res) {
//   var facility = new facility(req.body);

//   facility.save(function(err) {
//     if(err) {
//       console.log(err);
//       res.render("../views/facilities/create");
//     } else {
//       console.log("Successfully created an facility.");
//       res.redirect("/facilities/show/"+facility._id);
//     }
//   });
// };

// Edit an facility
facilityController.edit = function(req, res) {
  facility.findOne({_id: req.params.id}).exec(function (err, facility) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/facilities/edit", {facility: facility});
    }
  });
};

// Update an facility
facilityController.update = function(req, res) {
  facility.findByIdAndUpdate(req.params.id, { $set: {name: req.body.name, fosaCode: req.body.fosaCode, url: req.body.url, email: req.body.email, description: req.body.description, type: req.body.type, manager: req.body.manager, phoneNumber: req.body.tel }}, { new: true }, function (err, facility) {
    if (err) {
      console.log(err);
      res.render("../views/facilities/edit", {facility: req.body});
    }
    res.redirect("/facilities/show/"+facility._id);
  });
};

// // Delete an facility
// facilityController.delete = function(req, res) {
//   facility.remove({_id: req.params.id}, function(err) {
//     if(err) {
//       console.log(err);
//     }
//     else {
//       console.log("facility deleted!");
//       res.redirect("/facilities");
//     }
//   });
// };

module.exports = facilityController;
