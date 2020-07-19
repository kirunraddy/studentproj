var mongoose=require('mongoose');
var schema= mongoose.Schema;
var stuschema=new schema({name:String,age:Number,address:String});
var student=mongoose.model("stucll",stuschema);
//alternate form
//module.exports=mongoose.model('stucll',stuschema);

module.exports=student;