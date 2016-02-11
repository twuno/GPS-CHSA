/**
 * Created by Walter Suazo on 20/01/2016.
 */

var pool = require('./conexion').pool;
var gpsModel ={};


gpsModel.listar= function(callback)
{
    pool.getConnection(function(err,connection)
    {
        var query = "SELECT ma.Descripcion Marca, mo.Nombre Modelo, mo.PK_ModeloId gps_id,mo.Host, mo.Port " +
                    "from ModeloGPS mo INNER JOIN MarcaGPS ma on mo.FK_Marca = ma.PK_MarcaGPSId;"
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
        }
    });
}

gpsModel.getMarca= function(callback)
{
    pool.getConnection(function(err,connection)
    {
        var query = "SELECT ma.Descripcion Marca,ma.PK_MarcaGPSId MarcaGps_id from MarcaGPS ma "
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
        }
    });
}

gpsModel.crearMarca=function(data,callback)
{
    pool.getConnection(function(err,connection)
    {
        var query = "Insert into MarcaGPS set ?"
        if (connection) {
            connection.query(query, data,function (error, rows) {
                connection.release();
                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, rows);
                }
            });
        }
    });
}

gpsModel.crearModelo=function(data,callback)
{
    pool.getConnection(function(err,connection)
    {
        var query = "Insert into ModeloGPS set ?"
        if (connection) {
            connection.query(query, data,function (error, rows) {
                connection.release();
                if (error) {
                    console.log(error);
                    callback(error, null);
                } else {
                    callback(null, rows);
                }
            });
        }
    });
}


gpsModel.modificarModelo=function(id,data,callback)
{
    pool.getConnection(function(err,connection){
        if(connection) {
            connection.query("update ModeloGPS set ? where PK_ModeloId ="+ id,data , function (error, result) {
                connection.release();
                if (error) {
                    console.log(error)
                    callback(error, null);

                } else {
                    callback(null, result);
                }

            });
        }
    });
}

module.exports=gpsModel;
