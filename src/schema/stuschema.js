var mongoose=require('mongoose');
var schema= mongoose.Schema;
var stuschema=new schema({name:String,age:Number,email:String});
var student=mongoose.model("stucll",stuschema);
module.exports=student;