module.exports = (sequelize, dataTypes) => {
    const alias = 'Color';

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
    }

    const config = {
        tableName: 'colors',
        underscored: true,
        timestamps: true,
        paranoid: true
    }

    const Color = sequelize.define(alias, cols, config);

    Color.associate = models => {
        Color.belongsToMany(models.Product, {as: 'products', through: 'product_color', foreignKey: 'color_id', otherKey: 'product_id', timestamps: false});
    }

    return Color;
}