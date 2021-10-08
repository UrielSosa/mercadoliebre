const express = require('express');
const router = express.Router();

const controller = require('../controllers/productController');



router.get('/detail', controller.create);
router.get('/create', controller.create);
router.get('/edit', controller.create);


module.exports = router;