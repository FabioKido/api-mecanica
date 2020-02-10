const { Model, DataTypes } = require('sequelize');

class Resource extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      action: DataTypes.STRING,
      enable: DataTypes.BOOLEAN,
      qtd: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.AccessPlan, { foreignKey: 'id_access_plan', as: 'access_plans' });
  }

}

module.exports = Resource;