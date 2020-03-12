const { Model, DataTypes } = require('sequelize');

class Company extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      nome_fantasia: DataTypes.STRING,
      type: DataTypes.STRING,
      cnpj: DataTypes.STRING(25),
      ie: DataTypes.STRING(13),
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
    this.belongsTo(models.Contact, { foreignKey: 'id_contact', as: 'contact' });
    this.belongsTo(models.Address, { foreignKey: 'id_address', as: 'address' });
  }
}

module.exports = Company;