const { Model, DataTypes } = require('sequelize');

class PaymentMethod extends Model {
  static init(sequelize) {
    super.init({
      method: DataTypes.STRING(60),
      operator: DataTypes.STRING(60),
      taxa: DataTypes.DECIMAL(8, 2),
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

}

module.exports = PaymentMethod;
