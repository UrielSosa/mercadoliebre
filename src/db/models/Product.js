module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            notNull: false,
        },
        description: {
            type: dataTypes.TEXT,
            notNull: false,
        },
        price: {
            type: dataTypes.DECIMAL,
            notNull: false,
        },
        brand_id: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
        category_id: {
            type: dataTypes.INTEGER,
            notNull: false,
        }
    }

    const config = {
        tableName: 'products',
        underscored: true,
        timestamps: true,
        paranoid: true
    }
    
    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Category, {as: 'category', foreignKey: 'category_id'});
        Product.belongsTo(models.Brand, {as: 'brand', foreignKey: 'brand_id'});
        Product.belongsToMany(models.Color, {as: 'colors', through: 'product_color' ,foreignKey: 'product_id', otherKey: 'color_id', timestamps: false });
        Product.belongsToMany(models.Image, {as: 'images', through: 'product_image' ,foreignKey: 'product_id', otherKey: 'image_id',  timestamps: false });
        Product.belongsToMany(models.Order, {as: 'orders', through: models.OrderDetail ,foreignKey: 'product_id', otherKey: 'order_id',  timestamps: false });
    }

    return Product;
}