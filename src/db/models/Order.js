module.exports = (sequelize, dataTypes) => {
    const alias = 'Order';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
        total: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
    }

    const config = {
        tableName: 'orders',
        underscored: true,
        timestamps: false,
        paranoid: false
    }

    const Order = sequelize.define(alias, cols, config);

    Order.associate = models => {
        Order.belongsTo(models.User, {as: 'user', foreignKey: 'user_id'});
        Order.belongsToMany(models.Product, {as: 'products', through: models.OrderDetail ,foreignKey: 'order_id', otherKey: 'product_id',  timestamps: false });

    }

    return Order;
}