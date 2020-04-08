const { Model, DataTypes } = require('sequelize');

class Vehicle extends Model {
  static init(sequelize) {
    super.init({
      fabricator: DataTypes.STRING(60),
      model: DataTypes.STRING(60),
      year_fab: DataTypes.INTEGER,
      year_model: DataTypes.INTEGER,
      color: DataTypes.STRING(60),
      observations: DataTypes.STRING,
      enable: DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

}

module.exports = Vehicle;
