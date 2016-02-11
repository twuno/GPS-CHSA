/**
 * Created by Walter Suazo on 16/01/2016.
 */

var express = require('express');
var moment = require('moment');
var servicio = require("../bin/servicios");
var userModel = require('../modelos/Login');
var bitacora = require('../modelos/Bitacora')



exports.login=function(req,res){
    var user = req.body.username;
    var pass = servicio.encriptar(req.body.password);
        userModel.getUser(user,pass,function(error,data){
            if(error){

            }else

            if (typeof data !== 'undefined' &&  data.length >0 ) {
                datos = data[0]
                if (datos.Activo == 1) {
                    if (moment().isBefore(datos.Vigencia)) {
                        tokencito = servicio.createToken(data[0]);
                        var data = {
                            IdUsuario: data[0].PK_UsuariosId,
                            idEvento: 1,
                            Mensaje: "inicio sesion",
                            fecha: moment.utc().format(),
                        };
                        bitacora.addUser(data, function (error, data) {

                        });
                        res.send({status:200,token:tokencito,empresa:datos.Nombre,rol:datos.FK_RolesId });

                    }else
                    {
                        res.send({status:401,Message:'Su usuario ha expirado'});
                    }
                }else
                {
                    res.send({status:401,Message:'Se ha cancelado el acceso a su empresa'});
                }
            }
            else
            {
                res.send({status:401,Message:'Usuario o Clave incorrecto'});

            }
        });


}
