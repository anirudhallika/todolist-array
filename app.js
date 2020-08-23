const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");
const app = express();
let list=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.listen(8080,function(){
  console.log("server on port 8080 is started");
})
app.get("/",function(req,res){
  //res.send("hello world");
  let today =date.getDate();
  res.render("home",{day:today,item:list});
});
app.post("/",function(req,res)
{
  let listValue = req.body.listValue;
  //console.log(req.body.buttonadd);
  console.log(listValue);
  if (req.body.buttonadd ==="1")
  {
  list.push(listValue);
  }
  else
  {
  list.pop(listValue);
  }
  res.redirect("/");
});
app.get("/about",function(req,res){
  res.render("about");
})
