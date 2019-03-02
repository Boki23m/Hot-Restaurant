// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Hot Restaurant (DATA) / Objects
// =============================================================
var reservations = [
    {
        firstName: "Marty",
        lastName: "McFly",
        phoneNumber: "858-550-1241"
    }
];

console.log(reservations.length);

var waitList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/view", function(req, res){
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  // Displays all characters
  app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
  });

  app.get("/api/waitlist", function (req,res) {
    return res.json(waitList);
  });
  
  // Displays a single character, or returns false
  // app.get("/api/characters/:character", function(req, res) {
  //   var chosen = req.params.character;
  
  //   console.log(chosen);
  
  //   for (var i = 0; i < characters.length; i++) {
  //     if (chosen === characters[i].routeName) {
  //       return res.json(characters[i]);
  //     }
  //   }
  
  //   return res.json(false);
  // });
  

  // Create New Reservation - takes in JSON input
  app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    console.log(req.body);

    // Using a RegEx Pattern to remove spaces from newReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newReservation.routeName = newReservation.customerName.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);

    if (reservations.length < 5){
        reservations.push(newReservation);
        res.json(newReservation);
        console.log(reservations);
    }

    else {
        waitList.push(newReservation);
        res.json(newReservation);
        console.log(waitList);
    }
  
    
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  