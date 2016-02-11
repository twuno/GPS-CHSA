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

      app.post('/login', validate(validation.login), require('../controller/login').login);
    }


    //:::::::::::::::::::::::::Usuarios:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    {
        app.get('/usuarios',middleware.ensureAuthenticated,require('../controller/usuarios').get);
        app.post('/usuarios',middleware.ensureAuthenticated,validate(validation.usuarios.post), require('../controller/usuarios').crear);
        app.put('/usuarios',middleware.ensureAuthenticated,validate(validation.usuarios.put), require('../controller/usuarios').put);

    }

    //:::::::::::::::::::::::::Unidades:::::::::::::::::::::::::::
    {
        app.get('/unidades', middleware.ensureAuthenticated,require('../controller/unidades').get);
        app.put('/unidades',middleware.ensureAuthenticated,validate(validation.unidades.put),require('../controller/unidades').put);
        app.post('/unidades',middleware.ensureAuthenticated,validate(validation.unidades.post),require('../controller/unidades').post);
        app.delete('/unidades',middleware.ensureAuthenticated,require('../controller/unidades').delete);

    }

    //::::::::::::::::::::::::GPS:::::::::::::::::::::::::::::::
    {
      app.get('/gps',middleware.ensureAuthenticated,require('../controller/gps').get);
      app.get('/marcagps',middleware.ensureAuthenticated,require('../controller/gps').getMarca);
      app.post('/marcagps',middleware.ensureAuthenticated,validate(validation.gps.postmarcas),require('../controller/gps').postMarca);
      app.post('/gps',middleware.ensureAuthenticated,validate(validation.gps.postmodelos),require('../controller/gps').postModelo);
      app.put('/gps',middleware.ensureAuthenticated,require('../controller/gps').putModelo);

    }

    //::::::::::::::::::::::::::Canbus:::::::::::::::::::.
  {
    app.get('/canbus',require('../controller/canbus').get);
    app.get('/motorista',require('../controller/canbus').getIB);
    app.get('/geocerca',require('../controller/canbus').getGE);
  }
}
