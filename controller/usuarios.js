/**
 * Created by Walter Suazo on 18/01/2016.
 */
var express = require('express');
var servicio = require("../bin/servicios");
var router = express.Router();
var userModel = require('../modelos/Usuarios');
var moment = require('moment');
/* GET users listing. */

router.get=( function(req, res) {
    empresa = req.rol;
    console.log(empresa);
    userModel.get(empresa,function(error,data){
        if(error)
        {
            console.log(error);
            res.sendStatus(500);

        }else
        {
            res.send(data);
        }
    })
});


router.crear=function(req,res){
    var user = req.body.user;
    var pass = req.body.password;
    empresa = req.body.empresa;
    var rol = req.body.rol;
    // var vigencia =req.body.vigencia;
    data =
    {
        FK_EmpresasId:empresa,
        Usuario:user,
        Clave:servicio.encriptar(pass),
        FK_RolesId:rol,
        Vigencia:moment().add(3,'months').format("YYYY-MM-DD")

    }

    userModel.addUser(data,function(error,data){
        if(error){
            console.log(error);
            res.send(error);
        }else
        {
            res.send( { title: 'Crear Usuario',info:user + ' creado' ,msg:true } );
        }

    });
}


router.put=function(req,res){
    data={}
    var id =req.body.id;
    if(typeof req.body.user==="undefined") {}else
    {
        data['Usuario']=req.body.user;
    }
    if(typeof req.body.pass==="undefined"){}else
    {
        data['Clave']=servicio.encriptar(req.body.pass);
    }
    if(typeof req.body.empresa ==="undefined"){}else
    {
        data['FK_EmpresasId']=req.body.empresa;
    }
    if(typeof req.body.rol ==="undefined"){}else
    {
        data['FK_RolesId']=req.body.rol;
    }
    if(typeof req.body.vigencia ==="undefined"){}else
    {
        data['Vigencia']=req.body.vigencia;
    }

    if (Object.keys(data).length<1)
    {
        res.sendStatus(400);
    }
    userModel.put(id,data,function(err,data){
        if(err)
        {
            console.log(err);
            res.sendStatus(500);
        }else
        {
            res.sendStatus(200);
        }
    });



}



module.exports = router;