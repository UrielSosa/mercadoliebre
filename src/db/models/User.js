module.exports = (sequelize, dataTypes) => {
    const alias = 'User';

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
        email: {
            type: dataTypes.STRING(60),
            notNull: true,
        },
        password: {
            type: dataTypes.TEXT,
            notNull: true,
        },
        image_id: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
        rol_id: {
            type: dataTypes.INTEGER,
            notNull: false,
        }
    }

    const config = {
        tableName: 'users',
        underscored: true,
        timestamps: false,
        paranoid: false
    }
    
    const User = sequelize.define(alias, cols, config);

    User.associate = models => {
        User.belongsTo(models.Image, {as: 'image', foreignKey: 'image_id'});
        User.belongsTo(models.Rol, {as: 'rol', foreignKey: 'rol_id'});
        User.hasMany(models.Order, {as: 'orders', foreignKey: 'user_id'});
    }

    return User;
}