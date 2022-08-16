
const express=require("express")
const app=express();
require('dotenv').config()
var mongoose=require("mongoose")
const peticiones=require('./routes/route')

const port=3500 || process.env.PORT

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//config cors
app.use((req, res, next) => {
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    //permitimos métodos http 
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use("/api",peticiones)
//conection database mongoDB
mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://carol:user@mern.pilzx.mongodb.net/tarject?retryWrites=true&w=majority',{useNewUrlParser:true}).then(()=>{
    console.log('Conection with database is correct');
    
    app.listen(port,'0.0.0.0',()=>{
        console.log("listen in port "+port)
    })

})

