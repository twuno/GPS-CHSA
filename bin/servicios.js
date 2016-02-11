/**
 * Created by Walter Suazo on 16/01/2016.
 */

var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('./config');

exports.createToken = function(data) {
    var payload = {
        iat: moment().unix(),
        exp: moment().add(12, "hours").unix(),
        emp:data.FK_EmpresasId,
        sub: data.PK_UsuariosId,
        rol:data.FK_RolesId,
        socio:data.FK_SocioId
    };
    return jwt.encode(payload, config.TOKEN_SECRET);
};

exports.encriptar=function(data)
{
    return jwt.encode(data,config.TOKEN_SECRET);
}

exports.desencriptar=function(data)
{
    return jwt.decode(data,config.TOKEN_SECRET);
}
