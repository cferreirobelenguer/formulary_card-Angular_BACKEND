
const esquemaSchema=require('../models/modelNumber')


var controller={
    save(req,res){
        var params=req.body;
            esquemaSchema.find(
                {"number":params.number},
            
            ).sort()
            .exec((err,resultados)=>{
                if(err){
                    return res.status(500).send({
                        status:"error",
                        message:"Error en la petición"
                    });
                    
                }
                if(resultados==""){
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
                }else{
                    return res.status(404).send({
                        status:"eror",
                        message:"Error ya existen datos"
                    })
                }
            })
            

        }

    }

module.exports=controller;