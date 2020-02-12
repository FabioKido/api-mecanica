const { Model, DataTypes } = require('sequelize');

class Permission extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      action: DataTypes.STRING,
      enable:  DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Group, { foreignKey: 'id_permission', through: 'group_permissions', as: 'groups' });
  }

}

module.exports = Permission;