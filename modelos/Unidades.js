/**
 * Created by Walter Suazo on 19/01/2016.
 */
var pool = require('./conexion').oldch;

unidadesModel= {};



unidadesModel.getImei = function(id,callback)
{
  pool.getConnection(function(err,con) {
   if(con){
     query= "select imei from dev.DeviceNAME where UNITID =substr("+id+",7,4)";
     
     con.query(query,function(err,row){
       con.release();
       if(err)
       {
         console.log(err);
          callback(err,null)
       }else
       {

         callback(null,row)
       }
     });
   }
  });
};


module.exports= unidadesModel;
