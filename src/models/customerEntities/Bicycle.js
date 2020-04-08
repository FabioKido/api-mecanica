const { Model, DataTypes } = require('sequelize');

class Bicycle extends Model {
  static init(sequelize) {
    super.init({
      hand_brake: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

}

module.exports = Bicycle;
