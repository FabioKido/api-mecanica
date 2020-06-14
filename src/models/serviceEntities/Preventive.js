const { Model, DataTypes } = require('sequelize');

class Preventive extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATEONLY,
      status: DataTypes.STRING(25),
      enable: DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Vehicle, { foreignKey: 'id_vehicle', as: 'vehicle' });
    this.belongsTo(models.Service, { foreignKey: 'id_service', as: 'service' });
  }
}

module.exports = Preventive;
