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

  static associate(models) {
    this.hasMany(models.OrderProduct, { foreignKey: 'id_order_service', as: 'order_products' });
    this.belongsTo(models.Service, { foreignKey: 'id_service', as: 'service' });
    this.belongsTo(models.Order, { foreignKey: 'id_order', as: 'order' });
    this.hasOne(models.User, { foreignKey: 'id_user', as: 'user' });
  }
}

module.exports = OrderService;
