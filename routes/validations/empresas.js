/**
 * Created by Walter Suazo on 19/01/2016.
 */
Joi=require('joi');



module.exports.post=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        nombre:Joi.string().required(),
        descripcion:Joi.string().required()

    }
}

module.exports.put=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        id:Joi.number().positive().required(),
        nombre: Joi.string().optional(),
        descripcion: Joi.string().optional(),
        activo:Joi.number().optional()
    }
}

module.exports.delete=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        id:Joi.number().positive().required()
    }
}