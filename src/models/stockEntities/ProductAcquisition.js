const { Model, DataTypes } = require('sequelize');

class ProductAcquisition extends Model {
  static init(sequelize) {
    super.init({
      qtd: DataTypes.INTEGER,
      unity_cost: DataTypes.DECIMAL(8, 2),
      discount: DataTypes.DECIMAL(8, 2),
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'id_product', as: 'product' });
    this.belongsTo(models.Acquisition, { foreignKey: 'id_acquisition', as: 'acquisition' });
  }
}

module.exports = ProductAcquisition;
