const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      description: DataTypes.STRING,
      indicator: DataTypes.STRING,
      workshop: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Transfer, { foreignKey: 'id_category', as: 'transfers' });
    this.hasMany(models.Recipe, { foreignKey: 'id_category', as: 'recipes' });
    this.hasMany(models.Expense, { foreignKey: 'id_category', as: 'expenses' });
  }
}

module.exports = Category;
