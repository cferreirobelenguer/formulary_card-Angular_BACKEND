var mongoose=require('mongoose')
var Schema=mongoose.Schema
var esquemaSchema= Schema({
    name:String,
    numer:String,
    date:String,
    cvc:String
});

module.exports=mongoose.model('tarject',esquemaSchema)