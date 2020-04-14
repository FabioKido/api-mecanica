const { Model, DataTypes } = require('sequelize');

class Schedule extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATE,
      status: DataTypes.STRING(25),
      observations: DataTypes.STRING,
      enable: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

}

module.exports = Schedule;
