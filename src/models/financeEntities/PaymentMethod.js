const { Model, DataTypes } = require('sequelize');

class PaymentMethod extends Model {
  static init(sequelize) {
    super.init({
      method: DataTypes.STRING(60),
      operator: DataTypes.STRING(60),
      taxa: DataTypes.DECIMAL(8, 2),
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Parcel, { foreignKey: 'id_payment_method', as: 'parcels' });
    this.hasMany(models.RecipeDetail, { foreignKey: 'id_payment_method', as: 'recipe_details' });
    this.hasMany(models.ExpenseDetail, { foreignKey: 'id_payment_method', as: 'expense_details' });
  }
}

module.exports = PaymentMethod;
