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

  static associate(models) {
    this.hasMany(models.ProductAcquisition, { foreignKey: 'id_acquisition', as: 'product_acquisitions' });
    this.belongsTo(models.Provider, { foreignKey: 'id_provider', as: 'provider' });
  }
}

module.exports = Acquisition;
