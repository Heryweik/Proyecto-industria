const express = require('express');
const router = express.Router();

const ventaController = require('../controllers/ventaController');

/* router.get('/', ventaController.list); */
router.post('/add', ventaController.save);
router.get('/:id', ventaController.edit);/* 
router.post('/update/:id', ventaController.update);
router.get('/delete/:id', ventaController.delete); */


module.exports = router;
