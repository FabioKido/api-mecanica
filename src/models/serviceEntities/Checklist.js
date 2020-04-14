const { Model, DataTypes } = require('sequelize');

class Checklist extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING(100),
      checked: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

}

module.exports = Checklist;
