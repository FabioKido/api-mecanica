const { Model, DataTypes } = require('sequelize');

class OrderProduct extends Model {
  static init(sequelize) {
    super.init({
      qtd: DataTypes.INTEGER,
      acquisition: DataTypes.DATE,
      total_sale: DataTypes.DECIMAL(8, 2),
      unit_sale: DataTypes.DECIMAL(8, 2),
      unit_cost: DataTypes.DECIMAL(8, 2),
      discount: DataTypes.DECIMAL(8, 2),
    }, {
      sequelize
    })
  }

}

module.exports = OrderProduct;
