const express = require ("express");
const bodyParser = require("bodyparser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/calculator.html");
// });

// app.post("/",function(req,res){

//     var num1 = Number(req.body.num1);
//     var num2 = Number(req.body.num2);

//     var result = num1 + num2 ;

//     res.send("calculated result is " + result);
// });

//bmi calculation

app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/",function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

res.send("The calculated BMI is " + bmi );
});


app.listen(3000, function(){

    console.log("server port 3000");
});
 