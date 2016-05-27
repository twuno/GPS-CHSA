/**
 * Created by Walter Suazo on 18/01/2016.
 */
//var express = require('express');
var o2x = require('object-to-xml');
var canbusModel = require('../modelos/Canbus');






exports.get = function(req,res,next)
{
  canbusModel.listar(function(error,data){
        if(data )
        {
          console.log(data.length);
            res.set('Content-Type','text/xml');
            res.send(o2x({
                'Activity xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"http://tramaq.stgands.com\" '   : {
                  Status:'ok',
                  ErrorCode:null,
                  ErrorDescription:null,
                  Locations:{
                    Location:data}
                  },
                  Diagnostics:null
            }));
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

      });
    }
    else
    {
      console.log(error);
      res.send({msg:false});
    }
  });
}
