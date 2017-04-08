var express = require('express');
var router = express.Router();
const os = require('os');

/* GET home page. */
router.get('/', function (req, res, next) {
  var info = { 
    release: os.release(), 
    type: os.type(), 
    cpus: os.cpus(), 
    hostname: os.hostname(), 
    arch: os.arch(),
    mem: os.totalmem()
  }

  res.render('index', { title: 'AZure Demo App', info: info });
});

module.exports = router;
