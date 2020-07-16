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

  static associate(models) {
    this.belongsTo(models.Order, { foreignKey: 'id_order', as: 'order' });
  }

}

module.exports = Timeline;
