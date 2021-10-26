const { check } = require('express-validator');
module.exports = {
    validateCreate: [
        check('name').notEmpty().withMessage('No puede estar vacio').bail().isString().withMessage('Debe ser string').bail(),
        check('price').isNumeric(),
      ]
}