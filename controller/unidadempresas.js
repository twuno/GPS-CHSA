/**
 * Created by Walter Suazo on 21/01/2016.
 */

var express = require('express');
var unidadempresaModel = require('../modelos/UnidadesEmpresas');


exports.get= function (req,res) {
    var socio = req.socio;
    unidadempresaModel.get(socio,function(error,data){
        if(error){
            console.log(error);
            res.sendStatus(500);
        }else
        {
            res.send({info:data,count:data.length});
        }
    });
}


exports.getByEmpresa= function (req,res) {
    var empresa= req.params.empresa;
    var socio = req.socio;
    unidadempresaModel.getNotInEmpresa(socio,empresa,function(error,data){
        if(error){
            console.log(error);
            res.send({msg:false});
        }else
        {
            res.send({info:data,count:data.length});
        }
    });
}


exports.post= function (req,res) {

    data= {
        FK_EmpresaId: req.body.empresa,
        FK_UnidadId:req.body.unidad
    }
    unidadempresaModel.guardar(data,function(error,data)
    {
        if(error)
        {
            console.log(error);
            res.send({msg:false});
        }else
        {
            res.send({msg:true});
        }
    });
}

exports.delete= function (req,res) {

    id = req.body.id;
    unidadempresaModel.delete(id,function(error,data){
        if(error)
        {
            console.log(error);
            res.sendStatus(500);
        }else
        {
            res.sendStatus(200);
        }

    });
}

exports.put= function (req,res) {
    empresa = req.empresa;
    id = req.body.id;
    data = {}

    if(typeof req.body.accion=== "undefined"){}else
    {
        data['FK_AccionId']=req.body.accion;
    }
    if(typeof req.body.ruta=== "undefined"){}else
    {
        data['FK_RutaId']=req.body.ruta;
    }

    if(Object.keys(data).length<1 || !req.body.id) {
        res.sendStatus(400);

    }else
    {
        unidadempresaModel.put(id,data,function(error,datos){
            if(error){
                console.log(error);
                res.sendStatus(500);
            }else
            {
                res.sendStatus(200);
            }
        });

    }

}
