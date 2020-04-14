const { Model, DataTypes } = require('sequelize');

class Timeline extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING(60),
    }, {
      sequelize
    })
  }
  
}

module.exports = Timeline;
