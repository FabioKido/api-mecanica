const { Model, DataTypes } = require('sequelize');

class Payment extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATE,
      parcels: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasOne(models.Order, { foreignKey: 'id_order', as: 'order' });
  }
}

module.exports = Payment;
