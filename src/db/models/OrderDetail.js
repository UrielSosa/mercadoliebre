module.exports = (sequelize, dataTypes) => {
    const alias = 'OrderDetail';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        order_id: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
        product_id: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
        quantity: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
    }

    const config = {
        tableName: 'order_details',
        underscored: true,
        timestamps: false,
        paranoid: false
    }

    const OrderDetail = sequelize.define(alias, cols, config);

    OrderDetail.associate = models => {
        OrderDetail.belongsTo(models.Product, {as: 'product', foreignKey: 'product_id' });
        OrderDetail.belongsTo(models.Order, {as: 'order', foreignKey: 'order_id' });
    }

    return OrderDetail;
}