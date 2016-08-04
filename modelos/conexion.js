/**
 * Created by Walter Suazo on 16/01/2016.
 */

var mysql = require('mysql');

ch = mysql.createPool({
  host:'honduras.ca6zya7z3wxn.us-west-2.rds.amazonaws.com',
  user:'Master',
  password:'H0ndu.gps!',
  database:'Gateway1',
  dateStrings:'date',
  waitForConnections:false,
  connectionLimit:100
});
exports.ch=ch;



oldch = mysql.createPool({
  host:'131.161.55.130',
  user:'root',
  password:'m4x3ll.gps!',
  database:'dev',
  dateStrings:'date',
  waitForConnections:false,
  connectionLimit:100
});
exports.oldch=oldch;
