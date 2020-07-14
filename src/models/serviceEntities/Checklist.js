const { Model, DataTypes } = require('sequelize');

class Checklist extends Model {
  static init(sequelize) {
    super.init({
      enable: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Diagnostic, { foreignKey: 'id_diagnostic', as: 'diagnostic' });
  }
}

module.exports = Checklist;
