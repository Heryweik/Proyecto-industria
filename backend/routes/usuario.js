const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.list);
router.post('/add', usuarioController.save);

module.exports = router;
