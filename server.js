/*server*/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 8080;
var db = 'mongodb://localhost/example';
var User = require('./models/user');
var Post = require('./models/post');
var Comment = require('./models/comment');
var jwt = require('jsonwebtoken');

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
