const { Model, DataTypes } = require('sequelize');

class ChecklistDetail extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING(100),
      checked: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Checklist, { foreignKey: 'id_checklist', as: 'checklist' });
  }
}

module.exports = ChecklistDetail;