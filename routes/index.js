var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GPS-CHSA',subtitle:'DPS-Service' });
});

module.exports = router;
