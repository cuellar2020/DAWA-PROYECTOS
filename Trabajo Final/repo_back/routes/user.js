
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/userController');
const tesisController = require('../controllers/tesisController');
// api/user
router.post('/', productoController.crearUser);
router.get('/:id', productoController.obtenerUser);
//api/tesis
router.post('/', tesisController.crearModel);
router.post('/', tesisController.obtenerModels);
router.post('/:id', tesisController.obtenerModel);
router.post('/:id', tesisController.actualizarModel);
router.post('/:id', tesisController.eliminarModel);
module.exports = router;