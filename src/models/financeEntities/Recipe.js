const { Model, DataTypes } = require('sequelize');

class Recipe extends Model {
  static init(sequelize) {
    super.init({
      total_value: DataTypes.DECIMAL(8, 2),
      description: DataTypes.STRING,
      parcels: DataTypes.INTEGER,
      date: DataTypes.DATE,
      options: DataTypes.STRING(10),
      observations: DataTypes.STRING,
      enable: DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

}

module.exports = Recipe;
