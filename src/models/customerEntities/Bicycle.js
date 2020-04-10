const { Model, DataTypes } = require('sequelize');

class Bicycle extends Model {
  static init(sequelize) {
    super.init({
      hand_brake: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasOne(models.Vehicle, { foreignKey: 'id_vehicle', as: 'vehicle' });
  }
}

module.exports = Bicycle;
