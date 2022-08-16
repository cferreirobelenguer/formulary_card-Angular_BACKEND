const rutas = require('express').Router(); 
const controller=require("../controller/controllerTarject")

//routes
rutas.post('/save',controller.save)

module.exports=rutas