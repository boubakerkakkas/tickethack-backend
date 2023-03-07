var express = require('express');
var router = express.Router();
const Trip = require('../models/trips')

/* GET home page. */
router.get('/trips', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
