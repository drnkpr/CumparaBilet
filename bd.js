var express = require("express");
var app = express(); 
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect('mongodb+srv://admin:admin@cluster0.fqycb.azure.mongodb.net/cumparabilet?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });


// var coffeeSchema = new mongoose.Schema({
//     name: String,
//     cantitateVerde: Number,
//     cantitatePrajita: Number,
//     procent: Number,
//     note: String
// });

// var Coffee = mongoose.model('Coffee', coffeeSchema);

// Coffee.create({
//     name: "ceapa",
//     cantitateVerde: 22,
//     cantitatePrajita: 0, 
//     procent: 60,
//     note: "asa era sa mai fie inca o data sau de 2 ori"
//  }, function(err, coffee){
//      if(err){
//          console.log(err);
//      } else {
//          console.log(coffee);
//      }
//  });


var evenimentSchema = new mongoose.Schema({
    name: String, 
    locatie: String, 
    descriere: String
});

var Eveniment = mongoose.model('Eveniment', evenimentSchema);



var biletSchema = new mongoose.Schema({
    name: String, 
    data: Date,
    tip: String,
    cantitate: Number
});