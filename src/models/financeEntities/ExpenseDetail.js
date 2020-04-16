const { Model, DataTypes } = require('sequelize');

class ExpenseDetail extends Model {
  static init(sequelize) {
    super.init({
      value: DataTypes.DECIMAL(8, 2),
      vencimento: DataTypes.DATE,
      document_number: DataTypes.INTEGER,
      taxa_ajuste: DataTypes.DECIMAL(8, 2),
      observations: DataTypes.STRING,
      paid_out: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

}

module.exports = ExpenseDetail;
