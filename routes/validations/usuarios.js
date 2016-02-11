/**
 * Created by Walter Suazo on 19/01/2016.
 */

Joi=require('joi');



module.exports.post=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        user:Joi.string().email().required(),
        password:Joi.string().required(),
        empresa: Joi.number().required(),
        rol: Joi.number().required()
    }
}

module.exports.put=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        id:Joi.number().positive().required(),
        user: Joi.string().email().optional(),
        pass: Joi.string().optional(),
        empresa:Joi.number().optional(),
        rol: Joi.number().optional(),
        vigencia:Joi.date().format('YYYY-MM-DD')
    }
}

module.exports.delete=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        cuenta:Joi.number().positive().required()
    }
}
