const express = require('express');
const router = express.Router();

const controller = require('../controllers/productController');

/* Envios de vistas */
router.get('/', controller.index); // Ruta para crear
router.post('/', controller.store); //Ruta que guarda

router.get('/detail/:id', controller.detail);
router.get('/create', controller.create);
router.get('/edit/:id', controller.edit);


/* Procesamiento de datos */
router.put('/edit/:id', controller.update);


module.exports = router;