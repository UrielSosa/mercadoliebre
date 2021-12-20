const db = require('../db/models');

module.exports = {
    home: async (req, res) => {
        let products = await db.Product.findAll({include: { all: true }});
        res.render('home', { products });
    }
}