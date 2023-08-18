const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');

router.get('/', productoController.list);
router.post('/add', productoController.save);

module.exports = router;