/**
 * Created by Walter Suazo on 21/01/2016.
 */

var pool = require('./conexion').pool;
var unidadesEmpresasModel ={};


unidadesEmpresasModel.get= function(socio,callback)
{
    pool.getConnection(function(err,connection)
    {
        var query =
            " select ue.PK_UnidadEmpresaId, e.PK_EmpresaId id_empresa,e.Nombre Empresa,u.PK_Unidades id_unidad,u.Nombre_Vehiculo Vehiculo "
            +   ",u.Imei from UnidadesEmpresas ue INNER JOIN Unidades u INNER JOIN Empresas e ON ue.FK_UnidadId = u.PK_Unidades "
            +    " AND ue.FK_EmpresaId= e.PK_EmpresaId and e.FK_SocioId = "+socio
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



unidadesEmpresasModel.getNotInEmpresa= function(socio,empresa,callback)
{
    pool.getConnection(function(err,connection)
    {
        var query =
            " SELECT u.FechaCreacion,  u.PK_Unidades id_unidad,	u.Nombre_Vehiculo Vehiculo,	u.Imei " +
            " FROM Unidades u where u.FK_SocioId = "+socio+" and u.PK_Unidades not in (Select DISTINCT	ue.FK_UnidadId " +
            " FROM	UnidadesEmpresas ue	WHERE	ue.FK_EmpresaId = "+empresa+")  "
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


unidadesEmpresasModel.guardar=function(Data,callback)
{
    pool.getConnection(function(err,connection){
        if(connection) {
            connection.query("Insert into UnidadesEmpresas set ?", Data, function (error, result) {
                connection.release();
                if (error) {
                    callback(error, null);
                } else {
                    callback(null,result);
                }
            });
        }
    });
}

unidadesEmpresasModel.eliminar = function(id,callback)
{
    pool.getConnection(function(err,connection){
        if(connection) {
            connection.query("Delete from Empresas where PK_EmpresaId = ?", id , function (error, result) {
                connection.release();
                if (error) {

                    callback(error, null);

                } else {
                    callback(null, {result : result});
                }

            });
        }
    });
}

unidadesEmpresasModel.update=function(id,Data,callback)
{
    pool.getConnection(function(err,connection){
        if(connection) {
            connection.query("update Empresas set ? where PK_EmpresaId ="+ id,Data , function (error, result) {
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

module.exports= unidadesEmpresasModel;
