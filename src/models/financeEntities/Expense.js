const { Model, DataTypes } = require('sequelize');

class Expense extends Model {
  static init(sequelize) {
    super.init({
      total_value: DataTypes.DECIMAL(8, 2),
      description: DataTypes.STRING,
      parcels: DataTypes.INTEGER,
      date: DataTypes.DATE,
      options: DataTypes.STRING(10),
      classification: DataTypes.STRING(60),
      observations: DataTypes.STRING,
      enable: DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'id_category', as: 'category' });
  }
}

module.exports = Expense;
