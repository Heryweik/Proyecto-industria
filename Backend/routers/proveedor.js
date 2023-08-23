const express = require('express');
const router = express.Router();

const proveedorController = require('../controllers/proveedorController');

router.get('/', proveedorController.list);
router.post('/add', proveedorController.save);
router.get('/:id', proveedorController.edit);
router.put('/update/:id', proveedorController.update);
router.delete('/delete/:id', proveedorController.delete);


module.exports = router;
