const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');

const {ObjectID} = require('mongodb');
const {Job} = require('./models/Jobs.js');
const {Employer} = require('./models/Employers.js');
const {Student} = require('./models/Students.js');
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


app.get('/login', (req, res) => {});

app.get('/student/login/:id', (req, res) => {});

app.put('/student/login/:id', (req, res) => {});

app.delete('/student/login/:id', (req, res) => {});






app.listen(port, () => {
  console.log(`Started up at ${port}`);
});
