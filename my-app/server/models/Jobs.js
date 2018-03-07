var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var JobSchema = new Schema(
{
  jobTitle: {
    type: String,
    required: true,
    trim: true
  },
  companyId: {
    type: ObjectId,
    required: true
  },
  jobDescription: {
    type: String,
    required: true,
    trim: true
  },
  skills: {
    type: [String]
  },
  timePosted: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = JobSchema;