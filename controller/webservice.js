/**
 * Created by Walter Suazo on 18/01/2016.
 */
var express = require('express');
var canbusModel = require('../modelos/WebService');
var unidadModel  = require('../modelos/Unidades');




exports.get = function(req,res,next)
{
   unidad =req.query.unidad;
  fechaDesde=req.query.fechaDesde;
  fechaHasta=req.query.fechaHasta;

  unidadModel.getImei(unidad,function(err,data){
    if(err){
      console.log(error);
      res.send({msg:false});
    }
    unit = data[0]['imei']
    canbusModel.listar(unit,unidad,fechaDesde,fechaHasta,function(error,data){
      if(data )
      {
        res.send({msg:true,
          result: data,
          cantidad:data.length
        });
      }
      else
      {
        console.log(error);
        res.send({msg:false});
      }
    });


  });
  }


exports.getIB = function(req,res,next)
{
  unidad =req.query.unidad;
  fechaDesde=req.query.fechaDesde;
  fechaHasta=req.query.fechaHasta;

  unidadModel.getImei(unidad,function(err,data){
    if(err){
      console.log(error);
      res.send({msg:false});
    }

    unit = data[0]['imei']


    canbusModel.listarIB(unit,unidad,fechaDesde,fechaHasta,function(error,data){
    if(data )
    {
      res.send({msg:true,
        result: data,
        cantidad:data.length
      });
    }
    else
    {
      console.log(error);
      res.send({msg:false});
    }
  });

  })
}


exports.getGE = function(req,res,next)
{
  unidad =req.query.unidad;
  fechaDesde=req.query.fechaDesde;
  fechaHasta=req.query.fechaHasta;

  unidadModel.getImei(unidad,function(err,data) {
    if (err) {
      console.log(error);
      res.send({msg: false});
    }

    unit = data[0]['imei']

    canbusModel.listarGe(unit,unidad, fechaDesde, fechaHasta, function (error, data) {
      if (data) {
        res.send({
          msg: true,
          result: data,
          cantidad: data.length
        });
      }
      else {
        console.log(error);
        res.send({msg: false});
      }
    });
  })
}
