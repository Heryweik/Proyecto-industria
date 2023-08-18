const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.list);
router.post('/add', usuarioController.save);
router.get('/update/:id', usuarioController.edit);
router.post('/update/:id', usuarioController.update);
router.get('/delete/:id', usuarioController.delete);


module.exports = router;
