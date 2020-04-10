const { Model, DataTypes } = require('sequelize');

class Acquisition extends Model {
  static init(sequelize) {
    super.init({
      acquisition: DataTypes.DATE,
      total_sale: DataTypes.DECIMAL(8, 2),
      total_qtd: DataTypes.INTEGER,
      nef_key: DataTypes.STRING,
      nef_number: DataTypes.STRING,
      approved: DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }
}

module.exports = Acquisition;
