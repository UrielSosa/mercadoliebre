module.exports = (sequelize, dataTypes) => {
    const alias = 'Rol';

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
        tableName: 'rols',
        underscored: true,
        timestamps: false,
        paranoid: false
    }

    const Rol = sequelize.define(alias, cols, config);

    Rol.associate = models => {
        Rol.hasMany(models.User, {as: 'users', foreignKey: 'rol_id'});
    }

    return Rol;
}