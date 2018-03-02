// import { ObjectId } from '../../../../../Library/Caches/typescript/2.6/node_modules/@types/bson';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var JobSchema = new Schema(
{
  _id: {
    type: String,
    require: false
  },
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
  time: {
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