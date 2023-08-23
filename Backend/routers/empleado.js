const express = require('express');
const router = express.Router();

const empleadoController = require('../controllers/empleadoController');

router.get('/', empleadoController.list);
router.post('/add', empleadoController.save);
router.get('/:id', empleadoController.edit);
router.put('/update/:id', empleadoController.update);
router.delete('/delete/:id', empleadoController.delete);


module.exports = router;
