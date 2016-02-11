/**
 * Created by Walter Suazo on 21/01/2016.
 */

Joi=require('joi');



module.exports.postmarcas=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        nombre:Joi.string().required()
    }
}

/*
*       FK_Marca:req.body.marca,
 Nombre:req.body.nombre,
 Host:req.body.host,
 Port:req.body.port
* */
module.exports.postmodelos=
{
  //  options: { allowUnknownBody: false,flatten : true },
    options: { allowUnknownBody: false,flatten : true },
    body: {
        marca:Joi.number().required().example(22),
        nombre:Joi.string().required(),
        host:Joi.string().ip().required(),
        port:Joi.number().required()
    }
}


module.exports.put=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        id:Joi.number().positive().required(),
        marca:Joi.number().optional(),
        nombre: Joi.string().optional(),
        host: Joi.string().ip().optional(),
        port:Joi.number().optional()

    }
}

module.exports.delete=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        id:Joi.number().positive().required()
    }
}