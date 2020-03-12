const { Model, DataTypes } = require('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init({
      street: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      number: DataTypes.INTEGER,
      city: DataTypes.STRING,
      uf: DataTypes.STRING(2),
      complement: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  /*static associate(models) {
    this.hasMany(models.Owner, { foreignKey: 'id_address', as: 'owners' });
    this.hasMany(models.Worker, { foreignKey: 'id_address', as: 'workers' });
    this.hasMany(models.Company, { foreignKey: 'id_address', as: 'companies' });
  }*/

}

module.exports = Address;