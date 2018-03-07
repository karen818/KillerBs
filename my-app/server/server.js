const read = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

const EmployerSchema = require('./models/Employers');
const JobSchema = require('./models/Jobs');
const { Student } = require('./models/Students');
const mongoose = require('mongoose');

const ObjectID = require('mongodb').ObjectID;

// which to use?

// const ObjectId = mongoose.Types.ObjectId; 

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
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

// employer signup form submit start --------------------------------------------------------

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

// employer signup form submit end / ------------------------------------------------------




// getting employer by id test code

// app.get to get and see ALL employers in postman

app.get('/employer', (req, res) => {
  Employer.find((err, employers) => {
    if (err)
      res.send(err);

    res.json(employers);
  });
});

// /////////////////


// get the employer with that id (accessed at GET http://localhost:3001/employer/:employer_id)
app.get('/employer/:employer_id', (req, res) => {
  Employer.findById(req.params.employer_id, (err, employer) => {
    if (err)
      res.send(err);
    res.json(employer);
  });
});
// end of test code

// employer update account form PUT ---------------------------------------------------
  // be sure to set values in Postman if testing with Postman under the Body tab below the url path bar

app.put('/employer/:employer_id', (req, res) => {
  Employer.findById(req.params.employer_id, (err, employer) => {
  
    employer.companyName = req.body.companyName;
    employer.firstName = req.body.firstName;
    employer.lastName = req.body.lastName;
    employer.email = req.body.email;
    employer.password = req.body.password;
    employer.url = req.body.url; // updating employer info

    // save info
    employer.save((err) => {
      if (err)
        res.send(err);

      res.json({ message: 'Employer account information updated.' });
    });

  });
});

// employer update account form PUT / -------------------------------------------------

// employer DELETE account form DELETE / ----------------------------------------------

app.delete('/employer/:employer_id', (req, res) => {
  Employer.remove({
    _id: req.params.employer_id
  }, (err, employer) => {
    if (err)
      res.send(err);

    res.json({ message: 'Employer successfully deleted.' });
  });
});

// /////    employer DELETE account form DELETE / -------------------------------------

// POST route for EmpCreatePostPage.js below

app.post('/job', (req, res) => {
  Job.create(
    {
      jobTitle: req.body.jobTitle,
      companyId: ObjectID(req.body.companyId),
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

// GET route for EmpListJobs.js

app.get('/job', (req, res) => {
  var {limit, companyid} = req.query;
  Job.find({
    companyId: companyid
  }).
  limit(limit).
  sort({ timePosted: -1 }).  
  exec((data)=>{
    console.log('Jobs returned for ', companyid, JSON.stringify(data, null, 4));
    return data
  });
})

// below is unused so far to line 123

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


// 

app.listen(port, () => {
  console.log(`Started up at ${port}`);
});
