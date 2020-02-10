const { Model, DataTypes } = require('sequelize');

class Contact extends Model {
  static init(sequelize) {
    super.init({
      phone: DataTypes.STRING(15),
      celphone: DataTypes.STRING(16),
      email: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Owner, { foreignKey: 'id_contact', as: 'owners' });
    this.hasMany(models.Worker, { foreignKey: 'id_contact', as: 'workers' });
    this.hasMany(models.Company, { foreignKey: 'id_contact', as: 'companies' });
  }

}

module.exports = Contact;