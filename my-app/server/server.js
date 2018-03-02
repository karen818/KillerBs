const express = require('express');
const bodyParser = require('body-parser');

const EmployerSchema = require('./models/Employers');
const JobSchema = require('./models/Jobs');
const { Student } = require('./models/Students');
const mongoose = require('mongoose');

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

var url = 'mongodb://jason.jiron:milkshake8@ds225078.mlab.com:25078/killerbs';

mongoose.connect(url, function (err) {
    if (err) throw err;
    console.log('Successfully connected to mLab Mongo db');
});

const Employer = mongoose.model('Employer', EmployerSchema);

const Job = mongoose.model('Job', JobSchema);

app.post('/student/signup', (req, res) => {
  var studentSignup = new Signup(req.body);
  studentSignup.save()
    .then(item => {
      res.send('New sign in saved');
    })
    .catch(err => {
      res.status(400).send('unable to save data');
    });
});

// important example -------------------------------------------------------

app.post('/employer/signup', (req, res) => {
  Employer.create(
    {
      companyName: req.body.companyName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      url: req.body.url
    }
  )
    .then(data => {
      console.log('Data returned from Employer signup ', data);
      res.json(data);
    })
    .catch(err => {
      res.json({ code: 400, message: "Employer signup failed", error: err });
    });
});

// important example -------------------------------------------------------

// POST route for EmpCreatePostPage.js below

app.post('/job', (req, res) => {
  Job.create(
    {
      jobTitle: req.body.jobTitle,
      companyId: req.body.companyId,
      jobDescription: req.body.jobDescription,
      skills: req.body.skills,
      url: req.body.url,
      location: req.body.location
    }
  )
    .then(data => {
      console.log('Data returned from Employer Create Job ', data);
      res.json(data);
    })
    .catch(err => {
      res.json({ code: 400, message: "Employer job post failed", error: err });
    });
});

// POST route for EmpCreatePostPage.js above

app.get('/login', (req, res) => { });

app.post('/login', (req, res) => {
  var newLogin = req.body;
  newLogin.createDate = new Date();

  if (!(req.body.firstName || req.bodylastName)) {
    handleError(res, "Invalid user", "Must provide first and last name.", 400);
  }

  db.collection(Students).insertOne(newLogin, (err, doc) => {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);

    }
  });
});

app.get('/student/login/:id', (req, res) => { });

app.put('/student/login/:id', (req, res) => { });

app.delete('/student/login/:id', (req, res) => { });




app.listen(port, () => {
  console.log(`Started up at ${port}`);
});
