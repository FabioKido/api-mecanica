const { Model, DataTypes } = require('sequelize');

class Family extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      workshop: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Product, { foreignKey: 'id_family', as: 'products' });
  }
}

module.exports = Family;
