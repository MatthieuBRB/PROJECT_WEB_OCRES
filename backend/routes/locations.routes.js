var express = require('express');
var router = express.Router();
const Location = require('../controllers/locations.controllers.js');

router.get('/', Location.findAll);

module.exports = router;