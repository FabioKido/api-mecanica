const { Model, DataTypes } = require('sequelize');

class Provider extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      cnpj: DataTypes.STRING(25),
      ie: DataTypes.STRING(13),
      observations: DataTypes.STRING,
      product_provider: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }
}

module.exports = Provider;
