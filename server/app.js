var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;


// initial jokes provided by the client
//package as object
var jokes = [
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "Went to the zoo the other day. It only had one dog in it.",
    punchLine: "It was shih tzu."
  }
];


// static file requests
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.get('/jokes', function(req, res){
  res.send(jokes);
});

//Set up server side routes to handle requests
app.post('/jokes/new', function(req, res){
  console.log('in jokes post:', jokes);
  jokes.push(req.body);
res.send(jokes);


}); //end /jokes post




// Send index.html file
app.get('/', function(req, res) {
  console.log('home base url hit');
  res.sendFile(path.resolve('server/public/views/index.html'));
});

// Start the server!
app.listen(port, function() {
  console.log("Node listening on port " + port);
});
