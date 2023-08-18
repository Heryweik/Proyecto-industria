const express = require('express');
const router = express.Router();

const categoriaController = require('../controllers/categoriaController');

router.get('/', categoriaController.list);
router.post('/add', categoriaController.save);
router.get('/update/:id', categoriaController.edit);
router.post('/update/:id', categoriaController.update);
router.get('/delete/:id', categoriaController.delete);


module.exports = router;
