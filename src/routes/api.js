const express = require('express');
const router = express.Router();
const controller = require('../controllers/apiController');

router.get('/products', controller.index);
router.post('/products', controller.store);
router.get('/products/:id', controller.show);
router.put('/products/:id', controller.update);
router.delete('/products/:id', controller.delete);

module.exports = router;