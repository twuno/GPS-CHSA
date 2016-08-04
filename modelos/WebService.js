/**
 * Created by Walter Suazo on 18/01/2016.
 */


var pool = require('./conexion').ch;
var Model ={};


Model.listar= function(unidad,unitid, desde,hasta,callback)
{
  pool.getConnection(function(err,connection)
  {
    var query = 'SELECT idfms1,'+unitid+' unitid,Odometer,Total_fuel,Actual_Speed,\
                      Actual_Engine_Speed,Actual_Engine_Torque,Accelerator_Pedal_Position,fecha FROM \
                             Gateway1.Canbus \
                              where unitid = '+unidad+' and fecha between "'+desde+'" and "'+hasta+'"';
    if (connection) {
      connection.query(query, function (error, rows) {
        connection.release();
        if (error) {
          console.log(error);
          callback(error, null);
        } else {
          callback(null, rows);
        }
      });
    }else{
      callback(err,null);
    }
  });
}



Model.listarIB= function(unidad,unitid, desde,hasta,callback)
{
  pool.getConnection(function(err,connection)
  {
    if (connection) {
      var query = 'SELECT idmotorista,'+unitid+' unitid,fecha,escaneo FROM \
                             Gateway1.Motoristas \
                              where unitid = '+unidad+' and fecha between "'+desde+'" and "'+hasta+'"';
      connection.query(query, function (error, rows) {
        connection.release();
        if (error) {
          console.log(error);
          callback(error, null);
        } else {
          callback(null, rows);
        }
      });
    }else{
      callback(err,null);
    }
  });
}

Model.listarGe= function(unidad,unitid, desde,hasta,callback)
{
  pool.getConnection(function(err,connection)
  {
    if (connection) {
      var query = 'SELECT '+unitid+' unitid,fecha,geocerca FROM \
                             Gateway1.InicioFinViaje \
                              where Imei = '+unidad+' and fecha between "'+desde+'" and "'+hasta+'"';
      connection.query(query, function (error, rows) {
        connection.release();
        if (error) {
          console.log(error);
          callback(error, null);
        } else {
          callback(null, rows);
        }
      });
    }else{
      callback(err,null);
    }
  });
}


module.exports= Model;
