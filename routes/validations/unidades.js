/**
 * Created by Walter Suazo on 19/01/2016.
 */
Joi=require('joi');



module.exports.post=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        nombre:Joi.string().required(),
        conductor:Joi.string().required(),
        imei: Joi.number().required(),
        activo: Joi.number().required(),
        icono: Joi.number().optional(),
        gps: Joi.number().required(),
        combustible:Joi.string().optional(),
        rendimiento:Joi.number().optional()
    }
}

module.exports.put=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        id:Joi.number().positive().required(),
        conductor: Joi.string().optional(),
        vehiculo: Joi.string().optional(),
        icono:Joi.number().optional(),
        combustible:Joi.string().optional(),
        rendimiento:Joi.number().optional(),
        gps: Joi.number().optional(),
        activo:Joi.number().optional(),
        imei: Joi.number().optional()
    }
}

module.exports.delete=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        cuenta:Joi.number().positive().required()
    }
}
