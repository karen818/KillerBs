const express = require('express');
const bodyParser = require('body-parser');

const {Job} = require('./models/Jobs.js');
const {Employer} = require('./models/Emplyers.js');
const {Student} = require('./models/Students.js');
const {mongoose} = require('mongoose');

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('Things are happening');
});



app.listen(port, () => {
  console.log(`Started up at ${port}`);
});
