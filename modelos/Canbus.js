/**
 * Created by Walter Suazo on 18/01/2016.
 */


var pool = require('./conexion').ch;
var canbusModel ={};


canbusModel.listar= function(unidad,unit, desde,hasta,callback)
{
    pool.getConnection(function(err,connection)
    {
        var query = 'SELECT idfms1,unitid,Odometer,Total_fuel,Actual_Speed,\
                      Actual_Engine_Speed,Actual_Engine_Torque,Accelerator_Pedal_Position,fecha FROM \
                             dev.canbus_fms1 \
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


canbusModel.listarIB= function(unidad, desde,hasta,callback)
{
  pool.getConnection(function(err,connection)
  {
    if (connection) {
      var query = 'SELECT idmotorista,unitid,fecha,escaneo FROM \
                             dev.motorista \
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

canbusModel.listarGe= function(unidad, desde,hasta,callback)
{
  pool.getConnection(function(err,connection)
  {
    if (connection) {
      var query = 'SELECT unitid,fecha,geocerca FROM \
                             dev.rfid_geocerca \
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


module.exports= canbusModel;
