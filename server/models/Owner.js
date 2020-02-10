const { Model, DataTypes } = require('sequelize');

class Owner extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      sex: DataTypes.STRING(1),
      cpf: DataTypes.STRING(14),
      rg: DataTypes.STRING(14),
      birthday: DataTypes.DATE,
      orgao_expeditor: DataTypes.STRING(30),
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
    this.belongsTo(models.Contact, { foreignKey: 'id_contact', as: 'contact' });
  }
}

module.exports = Owner;