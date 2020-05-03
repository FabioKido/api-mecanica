const { Model, DataTypes } = require('sequelize');

class Transfer extends Model {
  static init(sequelize) {
    super.init({
      total_value: DataTypes.DECIMAL(8, 2),
      description: DataTypes.STRING,
      date: DataTypes.DATE,
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
    this.belongsTo(models.Account, { foreignKey: 'id_account_origin', as: 'transfer_account_origin' });
    this.belongsTo(models.Account, { foreignKey: 'id_account_destiny', as: 'transfer_account_destiny' });
  }
}

module.exports = Transfer;
