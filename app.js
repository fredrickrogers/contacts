var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var contacts = require('./routes/contacts');

var app = express();

mongoose.connect('mongodb://localhost:27017/contacts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', contacts);

module.exports = app;
