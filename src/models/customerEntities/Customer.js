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
      birthday: DataTypes.DATEONLY,
      observations: DataTypes.STRING,
      status: DataTypes.INTEGER,
      inadimplente: DataTypes.BOOLEAN,
      active: DataTypes.BOOLEAN,
      workshop: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Vehicle, { foreignKey: 'id_customer', as: 'vehicles' });
    this.belongsTo(models.Contact, { foreignKey: 'id_contact', as: 'contact' });
    this.belongsTo(models.Address, { foreignKey: 'id_address', as: 'address' });
  }
}

module.exports = Customer;
