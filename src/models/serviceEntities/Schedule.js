const { Model, DataTypes } = require('sequelize');

class Schedule extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATEONLY,
      status: DataTypes.STRING(25),
      observations: DataTypes.STRING,
      enable: DataTypes.BOOLEAN,
      workshop: DataTypes.STRING,
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

module.exports = Schedule;
