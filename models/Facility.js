var mongoose = require('mongoose');

var facilitiesSchema = new mongoose.Schema({
    id: String,
    fosaCode: Number,
    name: String,
    description: String,
    url: String,
    type: String,
    geoPosition: {
      province: String,
      district: String,
      sector: String,
      cell: String,
      umudugudu: String,
    },
    openingDate: Date,
    closingDate: Date,
    email: String,
    phoneNumber: String,
    manager: String,
    coordinate: {
      longitude: String,
      latitude: String,
      altitude: String,
    }
  });

module.exports = mongoose.model('Facility', facilitiesSchema);
