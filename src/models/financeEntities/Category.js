const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      description: DataTypes.STRING,
      indicator: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

}

module.exports = Category;
