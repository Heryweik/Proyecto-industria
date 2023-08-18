const express = require('express');
const router = express.Router();

const proveedorController = require('../controllers/proveedorController');

router.get('/', proveedorController.list);
router.post('/add', proveedorController.save);
router.get('/update/:id', proveedorController.edit);
router.post('/update/:id', proveedorController.update);
router.get('/delete/:id', proveedorController.delete);


module.exports = router;
