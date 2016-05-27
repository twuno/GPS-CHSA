/**
 * Created by Walter Suazo on 18/01/2016.
 */


var pool = require('./conexion').pool;
var Model ={};


Model.listar= function(callback)
{
    pool.getConnection(function(err,connection)
    {

      var query = "select U.Placa LicensePlate, U.Nombre_Vehiculo Name,U.imei IMEI,P.Kilometraje Odometer,P.Latitud Latitude,"
      +" P.Longitud Longitude, CONVERT_TZ(P.FechaHora,'UTC','America/Tegucigalpa') DateTime,P.Velocidad Speed,'kph' SpeedMeasure,"
      +" P.Direccion Heading, estado(P.Ignicion,P.Velocidad) EngineStatus,U.Conductor DriverName, U.FK_ConductoresId DriverCode,"
      + " P.Ignicion Ignition,P.FechaHora DateUtc,P.Evento"
      +" from (SELECT	* FROM 	Posiciones p WHERE 	p.FechaHora > CONVERT_TZ(NOW(),'America/Tegucigalpa','UTC') - INTERVAL 10 MINUTE"
      +" AND Imei IN  (	SELECT	u.imei	FROM UnidadesEmpresas ue	INNER JOIN Unidades u ON u.PK_Unidades = ue.FK_UnidadID"
      +" where ue.FK_EmpresaId = 111))P INNER JOIN Unidades U on P.imei = U.imei"


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
