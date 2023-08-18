const express = require('express');
const router = express.Router();

const servicioController = require('../controllers/servicioController');

router.get('/', servicioController.list);
router.post('/add', servicioController.save);

module.exports = router;