const { Model, DataTypes } = require('sequelize');

class Diagnostic extends Model {
  static init(sequelize) {
    super.init({
      value: DataTypes.DECIMAL(8, 2),
      approved: DataTypes.BOOLEAN,
      observations: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Vehicle, { foreignKey: 'id_vehicle', as: 'vehicle' });
  }
}

module.exports = Diagnostic;
