const { Model, DataTypes } = require('sequelize');

class Schedule extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATE,
      status: DataTypes.STRING(25),
      observations: DataTypes.STRING,
      enable: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Vehicle, { foreignKey: 'id_vehicle', as: 'vehicle' });
  }
}

module.exports = Schedule;
