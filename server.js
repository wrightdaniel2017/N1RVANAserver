
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongodb  = require('mongodb');
const mongoose = require('mongoose');
const db = mongoose.connection;


const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors =  require('cors');

const path = require('path');
__dirname = path.resolve(__dirname);
mongoose.connect('mongodb://localhost/test');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: '*',
  
}));  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join('/public/html/')));
app.use(express.static(path.join('/public/css/')));
app.use(express.static(path.join('/public/js/')));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});
app.get("/login.html", (req, res) => {
  res.sendFile(__dirname + "/public/html/login.html");

});
app.get("/register.html", (req, res) => {
  res.sendFile(__dirname + "/public/html/register.html");
  console.log("register.html");
});
app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
  console.log("index.html");
});
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/html/register.html");
  console.log("register.html");
}
);
app.post("/register", (req, res) => {
  console.log(req.body);
  res.render("index.html");
}
);
app.post("/register.html", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
  console.log(req.body);
});



app.get("/css/style.css", (req, res) => {
  res.sendFile(__dirname + "/public/css/style.css");
});
app.get("/js/script.js", (req, res) => {
  res.sendFile(__dirname + "/public/js/script.js"); 
});


app.listen(port);
console.log('io server started: http://localhost:3000/');


function register(data) {
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  console.log("register");

}