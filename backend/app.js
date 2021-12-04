var express = require("express");
const mongoose = require("mongoose")
var cors = require('cors');
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var locationsRouter = require("./routes/locations.routes");

var app = express();

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.use(cors());

const url = "mongodb+srv://dbUser:dbUserPassword@cluster0.xdj4q.mongodb.net/StarWarsLocations?retryWrites=true&w=majority"

mongoose.connect(url, {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/locations", locationsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
})

app.listen(process.env.PORT || 3000);

module.exports = app;