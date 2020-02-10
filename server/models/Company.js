const { Model, DataTypes } = require('sequelize');

class Company extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      nome_fantasia: DataTypes.STRING,
      type: DataTypes.STRING,
      cnpj: DataTypes.STRING(25),
      ie: DataTypes.STRING(13),
      id_contact: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
  }
}

module.exports = Company;