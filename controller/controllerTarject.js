
const esquemaSchema=require('../models/modelNumber')
var validator= require('validator');

var controller={
    save(req,res){
        var params=req.body;
        try{
            var validate_nombre=!validator.isEmpty(params.nombre);
            var validate_number=!validator.isEmpty(params.number);
            var validate_date=!validator.isEmpty(params.date);
            var validate_cvc=!validator.isEmpty(params.cvc);
        }catch(err){
            return res.status(400).send({
                status:'error',
                message:'Faltan datos por enviar'
            });
        }
        if(validate_nombre && validate_number && validate_date && validate_cvc){
            var datosTarjeta=new esquemaSchema();
            datosTarjeta.nombre=params.nombre;
            datosTarjeta.number=params.number;
            datosTarjeta.date=params.date;
            datosTarjeta.cvc=params.cvc;

            datosTarjeta.save((err,tarjetaGuardada)=>{
                 //Error
                if(err || !tarjetaGuardada){
                    return res.status(404).send({
                        status:'error',
                        message: 'Los datos de la tarjeta no se han guardado'
                    });
                
                }
                //it saves the information to the employment
            
                return res.status(200).send({
                    status:'success',
                    datosTarjeta:tarjetaGuardada
                    });
            });

        }

    }
}
module.exports=controller;