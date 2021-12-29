module.exports = (sequelize, dataTypes) => {
    const alias = 'Image';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        url: {
            type: dataTypes.STRING(45),
            notNull: false,
        },
    }

    const config = {
        tableName: 'images',
        underscored: true,
        timestamps: false,
        paranoid: false
    }

    const Image = sequelize.define(alias, cols, config);

    Image.associate = models => {
        Image.belongsToMany(models.Product, {as: 'products', through: 'product_image', foreignKey: 'image_id', otherKey: 'product_id', timestamps: false });
        Image.hasMany(models.User, {as: 'users', foreignKey: 'image_id'});
    }

    return Image;
}