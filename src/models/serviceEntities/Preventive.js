const { Model, DataTypes } = require('sequelize');

class Preventive extends Model {
  static init(sequelize) {
    super.init({
      date: DataTypes.DATE,
      status: DataTypes.STRING(25),
      enable: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

}

module.exports = Preventive;
