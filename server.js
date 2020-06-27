const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type, x-www-form-urlencoded'); // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Credentials', true); // Set to true if you need the website to include cookies in the requests sent // to the API (e.g. in case you use sessions)
  next(); // Pass to next layer of middleware
});

//routing
const user = require('./routes/user-route');
const customers = require('./routes/customers-route');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application.",status:200 });
});

app.use('/users', user);
app.use('/customers',customers)
let port = 3000;
app.listen(port, () => {
    console.log("Server is running on port",port);
});





