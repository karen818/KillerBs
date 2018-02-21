var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmployerSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
      //HASH
    },
    jobsPosted: {
      type: [String]
    },
    url: {
      type: String,
      required: true
    }
  }
);

// User Passport.js for Password login
var Employer = mongoose.model('Employer', EmployerSchema );

module.exports = {
  Employer
}
