/**
 * Created by Walter Suazo on 16/01/2016.
 */

var middleware= require('../bin/middleware');
var validate, Joi;
validate = require('express-validation');
Joi = require('joi');
validation = require('./validations');


exports = module.exports = function(app) {
    //:::::::::::::::::::::::::Login::::::::::::::::::::::::::::::::::...
    {
      app.get('/', require('./index'));

    }



    //::::::::::::::::::::::::::Canbus:::::::::::::::::::.
  {
    app.get('/canbus',require('../controller/webservice').get);
    app.get('/motorista',require('../controller/webservice').getIB);
    app.get('/geocerca',require('../controller/webservice').getGE);
  }
}
