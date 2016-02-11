/**
 * Created by Walter Suazo on 18/01/2016.
 */
var express = require('express');
var canbusModel = require('../modelos/Canbus');





exports.get = function(req,res,next)
{
   unidad =req.query.unidad;
  fechaDesde=req.query.fechaDesde;
  fechaHasta=req.query.fechaHasta;


  canbusModel.listar(unidad,fechaDesde,fechaHasta,function(error,data){
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
}


exports.getIB = function(req,res,next)
{
  unidad =req.query.unidad;
  fechaDesde=req.query.fechaDesde;
  fechaHasta=req.query.fechaHasta;


  canbusModel.listarIB(unidad,fechaDesde,fechaHasta,function(error,data){
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
}


exports.getGE = function(req,res,next)
{
  unidad =req.query.unidad;
  fechaDesde=req.query.fechaDesde;
  fechaHasta=req.query.fechaHasta;


  canbusModel.listarGe(unidad,fechaDesde,fechaHasta,function(error,data){
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
}
