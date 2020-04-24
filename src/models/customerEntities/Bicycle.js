const { Model, DataTypes } = require('sequelize');

class Bicycle extends Model {
  static init(sequelize) {
    super.init({
      hand_brake: DataTypes.STRING(3),
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Vehicle, { foreignKey: 'id_vehicle', as: 'vehicle' });
  }
}

module.exports = Bicycle;
