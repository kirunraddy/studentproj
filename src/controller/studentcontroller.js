var student = require("../schema/stuschema.js");
var express = require("express");
//alternate

var stdroute = express.Router();

var body = require("body-parser");
stdroute.use(body.json());

////get method demo
// route.get('/manu', function(req,res)
// {
// 	res.send("hi veda");
// });

//post method demo
stdroute.post("/postallstudents", function (req, res) {
  var std = new student(req.body);
  std.save(function (err, allstd) {
    if (err) console.log(err);
    else console.log(allstd);
  });
});
stdroute.get("/getallstudents", function (req, res) {
  student.find({}, function (err, allstd) {
    if (err) console.log(err);
    else res.send(allstd);
    console.log(allstd);
  });
});
module.exports = stdroute;
