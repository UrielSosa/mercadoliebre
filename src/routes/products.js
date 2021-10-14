const express = require('express');
const router = express.Router();

const controller = require('../controllers/productController');


router.get('/', controller.index);
router.get('/detail/:id', controller.detail);
router.get('/create', controller.create);
router.get('/edit/:id', controller.edit);


module.exports = router;