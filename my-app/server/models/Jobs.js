var mongoose = require('mongoose');

var Job = mongoose.model('Job', {
  // not sure what to do with _id just yet
  _id: {
    type: String,
    require: false
  },    
  jobTitle: {
    type: String,
    required: true,
    trim: true
  },
  companyName: {
    type: String,
    required: true,
    trim: true
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
    type : Date,
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

module.exports = {
  Job
}
