const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const uniqueValidator = require('mongoose-unique-validator');
const hospitalSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true
  },
  adminId: {
    type: ObjectId,
    required: true
  },
  speciality: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Active'
  },
  description: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true,
    unique: true
  }

});

module.exports = mongoose.model('hospitalScehma', hospitalSchema);
