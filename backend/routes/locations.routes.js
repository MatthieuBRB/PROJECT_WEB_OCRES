var express = require('express');
var router = express.Router();
const Location = require('../controllers/locations.controllers.js');

router.get('/', Location.findAll);
router.get('/:name', Location.findByName);

router.post('/', Location.saveOne);

router.put('/:name', Location.updateByName);

router.delete('/:name', Location.deleteByName);

module.exports = router;