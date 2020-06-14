const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(sequelize) {
    super.init({
      image: DataTypes.STRING,
      nef_cod: DataTypes.STRING,
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      ncm: DataTypes.STRING(10),
      unidade: DataTypes.STRING,
      unity_cost: DataTypes.DECIMAL(8, 2),
      min_qtd: DataTypes.INTEGER,
      price_sale: DataTypes.DECIMAL(8, 2),
      premium: DataTypes.DECIMAL(8, 2),
      commission: DataTypes.DECIMAL(8, 2),
      profit: DataTypes.DECIMAL(8, 2),
      km_limit: DataTypes.INTEGER,
      validity: DataTypes.DATEONLY,
      origin_product: DataTypes.STRING,
      applications: DataTypes.STRING,
      observations: DataTypes.STRING,
      repos: DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    // this.hasMany(models.OrderProduct, { foreignKey: 'id_product', as: 'order_products' });
    this.hasMany(models.ProductAcquisition, { foreignKey: 'id_product', as: 'product_acquisitions' });
    this.belongsTo(models.Family, { foreignKey: 'id_family', as: 'family' });
  }
}

module.exports = Product;
