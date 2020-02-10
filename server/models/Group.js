const { Model, DataTypes } = require('sequelize');

class Group extends Model {
  static init(sequelize) {
    super.init({
      function: DataTypes.STRING,
      description: DataTypes.TEXT,
      enable:  DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'id_user', through: 'users_groups', as: 'users' });
    this.belongsToMany(models.Permission, { foreignKey: 'id_permission', through: 'groups_permissions', as: 'permissions' });
  }

}

module.exports = Group;