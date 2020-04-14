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

}

module.exports = Payment;
