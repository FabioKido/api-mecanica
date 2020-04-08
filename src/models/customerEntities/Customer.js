const { Model, DataTypes } = require('sequelize');

class Customer extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      sex: DataTypes.STRING(1),
      cpf: DataTypes.STRING(14),
      rg: DataTypes.STRING(14),
      cnpj: DataTypes.STRING(25),
      ie: DataTypes.STRING(13),
      birthday: DataTypes.DATE,
      observations: DataTypes.STRING,
      status: DataTypes.INTEGER,
      inadimplente:  DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

}

module.exports = Customer;
