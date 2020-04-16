const { Model, DataTypes } = require('sequelize');

class Transfer extends Model {
  static init(sequelize) {
    super.init({
      total_value: DataTypes.DECIMAL(8, 2),
      description: DataTypes.STRING,
      date: DataTypes.DATE,
      observations: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

}

module.exports = Transfer;
