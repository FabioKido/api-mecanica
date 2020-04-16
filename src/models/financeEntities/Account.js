const { Model, DataTypes } = require('sequelize');

class Account extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING(60),
      type: DataTypes.STRING(10),
      description: DataTypes.STRING,
      initial_value: DataTypes.DECIMAL(8, 2),
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

}

module.exports = Account;
