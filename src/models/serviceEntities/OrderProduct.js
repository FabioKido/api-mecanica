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

  static associate(models) {
    this.belongsTo(models.OrderService, { foreignKey: 'id_order_service', as: 'order_service' });
    this.belongsTo(models.Product, { foreignKey: 'id_product', as: 'product' });
    this.belongsTo(models.Provider, { foreignKey: 'id_provider', as: 'provider' });
  }
}

module.exports = OrderProduct;
