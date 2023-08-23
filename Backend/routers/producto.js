const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');

router.get('/', productoController.list);
router.post('/add', productoController.save);
router.get('/:id', productoController.edit);
router.put('/update/:id', productoController.update);
router.delete('/delete/:id', productoController.delete);


module.exports = router;