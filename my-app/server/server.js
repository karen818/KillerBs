const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');
const {Job} = require('./models/Jobs.js');
const {Employer} = require('./models/Employers.js');
const {Student} = require('./models/Students.js');
const {mongoose} = require('mongoose');

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

var db = 'mongodb://JasonJiron:milkshake8@ds225078.mlab.com:25078/killerbs';
console.log("mLab is working");


////////////////////////////////////////////////////////////////


app.get('/login', (req, res) => {});

app.post('/login', (req, res) => {
  var newLogin = req.body;
  newLogin.createDate = new Date();

  if (!(req.body.firstName || req.bodylastName)) {
    handleError(res, "Invalid user", "Must provide first and last name.", 400);
  }

  db.collection(Students).insertOne(newLogin, () => (err, doc) {
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
