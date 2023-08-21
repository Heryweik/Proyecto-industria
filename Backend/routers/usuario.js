const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.list);
router.post('/add', usuarioController.save);
router.get('/:id', usuarioController.edit);
router.post('/update/:id', usuarioController.update);
router.delete('/delete/:id', usuarioController.delete);
router.post('/login', usuarioController.login);


module.exports = router;
