const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items =["Salat","Quran Reciting","JOb"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    var today = new Date();
var options = {
    weekday : "long",
    day : "numeric",
    month : "long"
};
 var day = today.toLocaleDateString("en-US",options);

 res.render("list",{kindofDay : day,listitem : items});
})

app.post("/",function(req,res){
    var listitem = req.body.listitem;
    items.push(listitem);
    res.redirect("/");
})

app.listen(3000);