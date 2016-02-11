/**
 * Created by Walter Suazo on 19/01/2016.
 */

var express = require('express');
var unidadesModel = require('../modelos/Unidades');
var moment = require('moment');
moment.locale('es',{
    relativeTime:{
        s   :'%d S',
        m   :'1 m',
        mm  :'%d m',
        h   :'1 H',
        hh  :'%d H',
        d   :'1 d',
        dd  :'%d d',
        M   :'1 M',
        MM  :'%d M',
        y   :'1 Y',
        yy  :'%d Y'
    }
});


exports.get= function(req,res)
{
    socio=req.socio;

    unidadesModel.get(socio,function(error,data){
        if (error)
        {
            res.send(error);
        } else

            res.send({
                msg:true,
                cantidad:data.length,
               title : "Listado Unidades",
                info : data
            });

    });

}

exports.put= function(req,res)
{

    id = req.body.id;

    data={}
    if(typeof  req.body.conductor === "undefined") {}else {
        data['conductor']=req.body.conductor;
    }
    if(typeof  req.body.vehiculo === "undefined") {}else {
        data['Nombre_Vehiculo']=req.body.vehiculo;
    }
    if(typeof  req.body.icono === "undefined") {}else {
        data['FK_IconoId']=req.body.icono;
    }
    if(typeof  req.body.imei === "undefined") {}else {
        data['Imei']=req.body.imei;
    }
    if(typeof  req.body.gps === "undefined") {}else {
        data['FK_ModeloId']=req.body.gps;
    }
    if(typeof  req.body.activo === "undefined") {}else {
        data['Activo']=req.body.activo;
    }
    if(typeof  req.body.combustible === "undefined") {}else {
        data['Combustible']=req.body.combustible;
    }
    if(typeof  req.body.rendimiento === "undefined") {}else {
        data['Rendimiento']=req.body.rendimiento;
    }


    if (Object.keys(data).length<1)
    {
        res.sendStatus(400);
    }
    unidadesModel.Update(data,id,function(err,data){
        if(err){

            res.send({msg:false});
        }else{
            res.send({msg:'true',info:data});
        }

    });
}

exports.post=function(req,res)
{
    fecha = moment.utc().format();
    conductor=req.body.conductor;
    data=
    {
        imei:req.body.imei,
        FK_ModeloId:req.body.gps,
        Nombre_Vehiculo:req.body.nombre,
        Activo:req.body.activo,

        FechaCreacion:fecha,
        Conductor:conductor,
        FK_SocioId:req.socio
    }
    if(typeof req.body.combustible ==="undefined"){}else
    {
        data['Combustible']=req.body.combustible;
    }
    if(typeof req.body.rendimiento ==="undefined"){}else
    {
        data['Rendimiento']=req.body.rendimiento;
    }
    if(typeof req.body.icono ==="undefined"){}else
    {
        data['FK_IconoId']=req.body.icono;
    }

    unidadesModel.crear(data,function(err,data){
        if(err)
        {
            res.send({msg:false});
        }else
        {
            res.send({msg:true});
        }
    });
}

exports.delete=function(req,res){
    id=req.body.id;
    unidadesModel.delete(id,function(error,data){
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