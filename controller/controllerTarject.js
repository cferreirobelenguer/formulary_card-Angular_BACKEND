
const esquemaSchema=require('../models/modelNumber')


var controller={
    save(req,res){
        var params=req.body;
        
            var datosTarjeta=new esquemaSchema();
            datosTarjeta.name=params.name;
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

module.exports=controller;