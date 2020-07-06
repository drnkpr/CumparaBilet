var express = require("express");
var app = express(); 
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect('mongodb+srv://admin:admin@cluster0.fqycb.azure.mongodb.net/cumparabilet?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
 
var evenimentSchema = new mongoose.Schema({
    name: String, 
    locatie: String, 
    descriere: String
});

var Eveniment = mongoose.model('Eveniment', evenimentSchema);

var arr=[];

app.get("/", function(req, res){
    var arr = [];
    Eveniment.find({}, function(err, evenimente){
        if(err){
            console.log(err);
        } else {
            for(var i = 0; i < evenimente.length; i++){
                arr.push(evenimente[i]);
            } 
        }
        res.render("home", {arrEvenimente: arr});
    });

});

app.get("/detalii", function (req, res){
    res.render("detalii");
});


app.get("/adaugaeveniment", function(req, res){
    res.render("adaugaeveniment");
});

app.post("/adaugaeveniment", function(req, res){

    var titlu = req.body.titlu.toLowerCase();
    var locatie = req.body.locatie;
    var descriere = req.body.descriere;

    Eveniment.create({
    name: titlu, 
    locatie: locatie, 
    descriere: descriere
 }, function(err, eveniment){
     if(err){
         console.log(err);
     } else {
         res.redirect("/");
     }
 });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});