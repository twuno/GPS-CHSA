/**
 * Created by Walter Suazo on 22/01/2016.
 */
Joi=require('joi');



module.exports.post=
{
    options: { allowUnknownBody: false,flatten : true },
    body: {
        unidad:Joi.string().email().required(),
        empresa: Joi.number().required(),
    }
}
