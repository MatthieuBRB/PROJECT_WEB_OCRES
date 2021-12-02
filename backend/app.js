const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbName = 'Projet_Web_OCRES';
const dbURL = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(dbURL, {
    useNewUrlParser: true
});

if(!mongoose){
    console.log("laa");
}


var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var lieuxFilmsRouter= require("./routes/lieuxFilms.route");


var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/lieuxFilms", lieuxFilmsRouter);
module.exports = app;

