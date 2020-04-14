const { Model, DataTypes } = require('sequelize');

class OrderService extends Model {
  static init(sequelize) {
    super.init({
      type: DataTypes.STRING(60),
      commission: DataTypes.DECIMAL(8, 2),
      price: DataTypes.DECIMAL(8, 2),
      discount: DataTypes.DECIMAL(8, 2),
      premium: DataTypes.DECIMAL(8, 2),
      approved: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

}

module.exports = OrderService;
