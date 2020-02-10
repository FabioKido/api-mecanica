const { Model, DataTypes } = require('sequelize');

class AccessPlan extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      value: DataTypes.DECIMAL(8, 2),
      enable: DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.User, { foreignKey: 'id_access_plan', as: 'users' });
    this.hasMany(models.Resource, { foreignKey: 'id_access_plan', as: 'resourcers' });
  }

}

module.exports = AccessPlan;