/**
 * Created by Walter Suazo on 16/01/2016.
 */

var pool = require('./conexion').pool;

var userModel ={};
userModel.getUser=function(user,pass,callback) {

    pool.getConnection(function (err, connection) {

        if (connection) {
            query = 'SELECT * FROM Usuarios u inner join Empresas e on e.PK_EmpresaId=u.FK_EmpresasId  WHERE usuario =' + connection.escape(user) + 'and clave =' + connection.escape(pass)+" and u.FK_RolesId=1";
            connection.query(query, function (error, row) {
                connection.release();
                if (error) {

                    callback(error, null);
                } else {

                    callback(null, row);
                }

            });
        }
    });
}


module.exports=userModel