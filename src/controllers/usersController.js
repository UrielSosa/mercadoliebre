const path = require('path');
const { validationResult } = require('express-validator');

let controller = {
    register: (req,res)=>{
        res.render('users/register');
    },
    registered: function (req, res) {
        const errors = validationResult(req);
        return res.send(errors.mapped());
    },
    login (req,res) {
        res.render('users/login');
    },
    logged (req, res) {
        res.send('logueado');
    }
}

module.exports = controller;