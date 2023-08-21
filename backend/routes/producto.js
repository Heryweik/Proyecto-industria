const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');

router.get('/', productoController.list);
router.post('/add', productoController.save);
router.get('/update/:id', productoController.edit);
router.post('/update/:id', productoController.update);
router.get('/delete/:id', productoController.delete);


module.exports = router;