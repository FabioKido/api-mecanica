const { Model, DataTypes } = require('sequelize');

class Account extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING(60),
      type: DataTypes.STRING(10),
      description: DataTypes.STRING,
      initial_value: DataTypes.DECIMAL(8, 2),
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Parcel, { foreignKey: 'id_bank_account', as: 'parcels' });
    this.hasMany(models.Transfer, { foreignKey: 'id_account_origin', as: 'origin_transfers' });
    this.hasMany(models.Transfer, { foreignKey: 'id_account_destiny', as: 'destiny_transfers' });
    this.hasMany(models.RecipeDetail, { foreignKey: 'id_account_destiny', as: 'destiny_recipes' });
    this.hasMany(models.ExpenseDetail, { foreignKey: 'id_account_destiny', as: 'destiny_expenses' });
  }
}

module.exports = Account;
