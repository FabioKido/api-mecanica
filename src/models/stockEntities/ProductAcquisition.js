const { Model, DataTypes } = require('sequelize');

class ProductAcquisition extends Model {
  static init(sequelize) {
    super.init({
      qtd: DataTypes.INTEGER,
      unity_cost: DataTypes.DECIMAL(8, 2),
      discount: DataTypes.DECIMAL(8, 2),
    }, {
      sequelize
    })
  }
}

module.exports = ProductAcquisition;
