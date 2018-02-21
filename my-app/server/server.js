const express = require('express');
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb');

const {Job} = require('./models/Jobs');
const {Employer} = require('./models/Employers');
const {Student} = require('./models/Students');
const {mongoose} = require('mongoose');

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

var url = 'mongodb://jason.jiron:milkshake8@ds225078.mlab.com:25078/killerbs';
console.log("mLab is working");


////////////////////////////////////////////////////////////////

// MongoClient.connect(url, (err, db) => {
//   if(err) throw err;
//   var dbo = db.db("killerbs")
//   var myobj = {firstName:"Jason", lastName:"Jiron", email:"bad@code.net", password:"000"};
//   dbo.collection("Students").insertOne(myobj, (err, res) => {
//     if (err) throw err;
//     console.log("test insert worked");
//     db.close();
//   });
// });

app.post('/student-signup', (req, res) => {
  var studentSignup = new Signup(req.body);
  studentSignup.save()
  .then(item => {
    res.send('New sign in saved');
  })
  .catch(err => {
    res.status(400).send('unable to save data');
  });
});

// pppppp

app.post('/employer/signup', (req, res) => {
  var employerSignup = new Employer(req.body);
  console.log(req.body);
  employerSignup.save()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json({code:400, message:"Employer signup failed", error: err});
  });
});

// pppppp

app.get('/login', (req, res) => {});

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

app.get('/student/login/:id', (req, res) => {});

app.put('/student/login/:id', (req, res) => {});

app.delete('/student/login/:id', (req, res) => {});




app.listen(port, () => {
  console.log(`Started up at ${port}`);
});
