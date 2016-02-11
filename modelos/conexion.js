/**
 * Created by Walter Suazo on 16/01/2016.
 */

var mysql = require('mysql');


ch = mysql.createPool({
  host:'131.161.55.130',
  user:'root',
  password:'m4x3ll.gps!',
  database:'Positions',
  dateStrings:'date',
  waitForConnections:false,
  connectionLimit:100
});
exports.ch=ch;
