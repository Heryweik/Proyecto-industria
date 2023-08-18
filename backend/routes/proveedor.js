const express = require('express');
const router = express.Router();

const proveedorController = require('../controllers/proveedorController');

router.get('/', proveedorController.list);
router.post('/add', proveedorController.save);

module.exports = router;
