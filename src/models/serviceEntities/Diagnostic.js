const { Model, DataTypes } = require('sequelize');

class Diagnostic extends Model {
  static init(sequelize) {
    super.init({
      value: DataTypes.DECIMAL(8, 2),
      approved: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasOne(models.Checklist, { foreignKey: 'id_checklist', as: 'checklist' });
  }
}

module.exports = Diagnostic;
