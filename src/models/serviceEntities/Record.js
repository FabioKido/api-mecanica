const { Model, DataTypes } = require('sequelize');

class Record extends Model {
  static init(sequelize) {
    super.init({
      audio: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

}

module.exports = Record;
