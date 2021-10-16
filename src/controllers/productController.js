const path = require('path');
const fs = require('fs');

/* Logica para traer los productos */
let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../db/products.json'), 'utf-8');
let products = JSON.parse(jsonProducts); //Convertimos el json a array


module.exports = {
    index: (req, res) => {
        res.render('products/products');
    },
    detail (req, res) {
        let id = req.params.id;

        // let productoDetalle = products.filter(product => {
        //     return product.id == id;
        // })

        let productoDetalle = products.find(product => {
            return product.id == id;
        })

        res.render('products/detail', { product: productoDetalle });
    },
    create: (req, res) => {
        res.render('products/create');
    },
    edit: function (req, res) {
        res.render('products/edit');
    }
}