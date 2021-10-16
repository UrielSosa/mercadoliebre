const express = require('express');
const router = express.Router();

const controller = require('../controllers/productController');

/* Envios de vistas */
router.get('/', controller.index); // Ruta para crear
router.post('/', controller.store); //Ruta que guarda

router.get('/create', controller.create);
router.get('/edit/:id', controller.edit);

router.get('/:id', controller.detail);

/* Procesamiento de datos */
router.delete('/:id', controller.delete);
router.put('/edit/:id', controller.update);


module.exports = router;