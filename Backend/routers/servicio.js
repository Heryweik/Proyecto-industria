const express = require('express');
const router = express.Router();

const servicioController = require('../controllers/servicioController');

router.get('/', servicioController.list);
router.post('/add', servicioController.save);
router.get('/update/:id', servicioController.edit);
router.post('/update/:id', servicioController.update);
router.get('/delete/:id', servicioController.delete);

module.exports = router;