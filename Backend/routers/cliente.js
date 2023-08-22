const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.list);
router.post('/add', clienteController.save);
router.get('/:id', clienteController.edit);
router.put('/update/:id', clienteController.update);
router.get('/delete/:id', clienteController.delete);

module.exports = router;
