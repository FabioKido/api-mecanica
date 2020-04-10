const { Model, DataTypes } = require('sequelize');

class Automobile extends Model {
  static init(sequelize) {
    super.init({
      board: DataTypes.STRING(8),
      motor: DataTypes.STRING(100),
      fuel: DataTypes.STRING(60),
      car_exchange: DataTypes.STRING(60),
      direction: DataTypes.STRING(60),
      doors: DataTypes.STRING(10),
      chassis: DataTypes.STRING(17),
      renavam: DataTypes.STRING(11),
      ar: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Vehicle, { foreignKey: 'id_vehicle', as: 'vehicle' });
  }
}

module.exports = Automobile;
