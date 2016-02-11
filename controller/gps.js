/**
 * Created by Walter Suazo on 20/01/2016.
 */
var gpsModel = require('../modelos/GPS');

exports.get = function(req,res)
{

   gpsModel.listar(function(error,data){
        if(data )
        {
            res.send({msg:true,
                info: data});
        }
        else
        {
            console.log(error);
            res.send({msg:false});
        }
    });
}

exports.getMarca = function(req,res)
{

    gpsModel.getMarca(function(error,data){
        if(data )
        {
            res.send({msg:true,
                info: data});
        }
        else
        {
            console.log(error);
            res.send({msg:false});
        }
    });
}

exports.postMarca = function(req,res)
{
    data={
        Descripcion:req.body.nombre
    }

    gpsModel.crearMarca(data,function(error,data){
        if(data )
        {
            res.send({msg:true});
        }
        else
        {
            res.send({msg:false});
        }
    });
}


exports.postModelo = function(req,res)
{
    data={
        FK_Marca:req.body.marca,
        Nombre:req.body.nombre,
        Host:req.body.host,
        Port:req.body.port
    }

    gpsModel.crearModelo(data,function(error,data){
        if(data )
        {
            res.send({msg:true
                });
        }
        else
        {
            console.log(error);
            res.send({msg:false});
        }
    });
}

exports.putModelo=function(req,res)
{
    id = req.body.id;
    data={
    }
    if(typeof req.body.marca ==="undefined" ){}else{
        data['FK_Marca']=req.body.marca;
    }
    if(typeof req.body.nombre ==="undefined"){}else {
        data['Nombre']=req.body.nombre;
    }
    if(typeof req.body.host ==="undefined"){}else {
        data['Host']=req.body.host;
    }
    if(typeof req.body.port ==="undefined"){}else {
        data['Port']=req.body.port;
    }

    if(Object.keys(data).length<1)
    {
        res.sendStatus(400);
    }
    gpsModel.modificarModelo(id,data,function(error,data){
        if(data )
        {
            res.send({msg:true
            });
        }
        else
        {
            console.log(error);
            res.send({msg:false});
        }
    });
}