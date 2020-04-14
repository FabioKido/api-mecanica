const { Model, DataTypes } = require('sequelize');

class Service extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.OrderService, { foreignKey: 'id_service', as: 'order_services' });
  }
}

module.exports = Service;
