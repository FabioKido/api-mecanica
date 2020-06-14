const { Model, DataTypes } = require('sequelize');

class ExpenseDetail extends Model {
  static init(sequelize) {
    super.init({
      value: DataTypes.DECIMAL(8, 2),
      vencimento: DataTypes.DATEONLY,
      document_number: DataTypes.INTEGER,
      taxa_ajuste: DataTypes.DECIMAL(8, 2),
      observations: DataTypes.STRING,
      paid_out: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.PaymentMethod, { foreignKey: 'id_payment_method', as: 'payment_method' });
    this.belongsTo(models.Account, { foreignKey: 'id_account_destiny', as: 'expense_account_destiny' });
    this.belongsTo(models.Expense, { foreignKey: 'id_expense', as: 'expense' });
  }
}

module.exports = ExpenseDetail;
