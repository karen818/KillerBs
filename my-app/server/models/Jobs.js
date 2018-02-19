var mongoose = require('mongoose');

var Job = mongoose.model('Job', {
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  requiredSkills: {
    type: [String]
  },
  time: {
    type : Date,
    default: Date.now
  }
});

module.exports = {
  Job
}
