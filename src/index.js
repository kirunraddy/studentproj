var stdroute=require('./controller/studentcontroller.js');
var express=require('express');
var mongoose=require('mongoose');
var app =express();
mongoose.connect('mongodb://localhost:27017/demo1');
app.use('/student',stdroute);

app.listen(3000);
console.log("port is running");