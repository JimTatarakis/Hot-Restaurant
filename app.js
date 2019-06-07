// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var reservations = [
    {
        name: "Yoda",
        phone: 9999999999,
        email: "email@emai.com",
        ID: 1234
    },
    {
        name: "Liam",
        phone: 8888888888,
        email: "liam@emai.com",
        ID: 5678
    },
    {
        name: "Jim",
        phone: 7777777777,
        email: "jim@emai.com",
        ID: 8765
    },
    {
        name: "Alex",
        phone: 6666666666,
        email: "alex@emai.com",
        ID: 4321
    },
];


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "html/home.html"));
});

app.get("/home.html", function (req, res) {
    res.sendFile(path.join(__dirname, "html/home.html"));
});

app.get("/tables.html", function (req, res) {
    res.sendFile(path.join(__dirname, "html/tables.html"));
});

app.get("/reservation.html", function (req, res) {
    res.sendFile(path.join(__dirname, "html/reservation.html"));
});

app.get("/api/tables", function (req, res) {
    res.json(reservations);
})

app.post("/api/tables", function(req, res){
    console.log(req)
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });