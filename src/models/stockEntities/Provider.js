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

  static associate(models) {
    this.hasMany(models.OrderProduct, { foreignKey: 'id_product', as: 'order_products' });
    this.hasMany(models.Acquisition, { foreignKey: 'id_provider', as: 'acquisitions' });
    this.belongsTo(models.Contact, { foreignKey: 'id_contact', as: 'contact' });
    this.belongsTo(models.Address, { foreignKey: 'id_address', as: 'address' });
  }
}

module.exports = Provider;
