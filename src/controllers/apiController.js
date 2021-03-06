const db = require('../db/models');

module.exports = {
    index: (req, res) => {
        db.Product.findAll({include: { all: true }})
            .then(products => {
                res.status(200).json({
                    status: 200,
                    count: products.length,
                    result: products
                })
            })
            .catch(error => {
                res.send(error);
            })
    },
    show: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                res.status(200).json({
                    status: 200,
                    result: product
                })
            })
            .catch(error => {
                res.status(501).json(error);
            })
    },
    store: (req, res) => {
        db.Product.create(req.body)
            .then(product => {
                res.status(200).json({
                    status: 200,
                    result: product
                })
            })
            .catch(error => {
                res.status(501).json(error);
            })
    },
    update: (req, res) => {
        return res.send('actualiza un recurso');
    },
    delete: (req, res) => {
        return res.send('borra un recurso');
    }
}