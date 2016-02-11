/**
 * Created by Walter Suazo on 19/01/2016.
 */
var pool = require('./conexion').pool;

unidadesModel= {};

unidadesModel.get=function(socio,callback)
{
    pool.getConnection(function(err,connection)
    {
        if (connection) {
            query = "SELECT u.PK_Unidades unidad_id,u.imei,u.Activo,u.Nombre_Vehiculo,u.Conductor,u.FechaCreacion,m.PK_ModeloId modelogps_id, m.Nombre Gps,c.Nombre Combustible, u.Rendimiento "+
            " FROM Unidades u INNER JOIN ModeloGPS m on u.FK_ModeloId = m.PK_ModeloId "+
            " INNER JOIN Combustible c on c.PK_CombustibleId= u.FK_CombustibleId "+
                " where u.FK_SocioId="+socio
            connection.query(query, function (error, row) {
                connection.release();
                if (error) {
                    callback(error, null)
                } else {
                    callback(null, row);
                }
            });
        }
    });
};

unidadesModel.Update = function(data,id,callback){
    pool.getConnection(function(err,con){

        if(con){
            query = "Update Unidades set ?  where PK_Unidades="+id
            sql = con.format(query,data);
            con.query(sql,function(error,row){
                if(error)
                {
                    callback(error,null);
                } else{
                    callback(null,row);
                }
            });
        }
    });

}


unidadesModel.crear=function(data,callback)
{
    pool.getConnection(function(err,con){

        if(con){
            query = "insert into Unidades set ? ";
            console.log(con.format(query,data));
            con.query(query,data,function(error,row){
                if(error)
                {
                    callback(error,null);
                } else{
                    callback(null,row);
                }
            });
        }
    });
}


unidadesModel.delete=function(id,callback)
{
    pool.getConnection(function(err,con){

        if(con){
            query = "delete from Unidades where PK_Unidades="+id;
            con.query(query,function(error,row){
                if(error)
                {
                    callback(error,null);
                } else{
                    callback(null,row);
                }
            });
        }
    });

}
module.exports= unidadesModel;