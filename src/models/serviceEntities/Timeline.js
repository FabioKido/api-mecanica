const { Model, DataTypes } = require('sequelize');

class Timeline extends Model {
  static init(sequelize) {
    super.init({
      enable: DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
    }, {
      sequelize
    })
  }

}

module.exports = Timeline;
