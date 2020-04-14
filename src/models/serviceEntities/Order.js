const { Model, DataTypes } = require('sequelize');

class Order extends Model {
  static init(sequelize) {
    super.init({
      km: DataTypes.INTEGER,
      tanque: DataTypes.INTEGER,
      internal_control: DataTypes.STRING,
      prevision_exit: DataTypes.DATE,
      observations: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

}

module.exports = Order;
