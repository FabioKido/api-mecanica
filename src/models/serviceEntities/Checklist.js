const { Model, DataTypes } = require('sequelize');

class Checklist extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING(100),
      checked: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Diagnostic, { foreignKey: 'id_diagnostic', as: 'diagnostic' });
  }
}

module.exports = Checklist;
