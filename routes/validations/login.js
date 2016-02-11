/**
 * Created by Walter Suazo on 19/01/2016.
 */

var Joi = require('joi');

module.exports = {
    options: { allowUnknownBody: false,flatten : true },
    body: {
        username: Joi.string().email().required(),
        password: Joi.string().required()
    }
};
