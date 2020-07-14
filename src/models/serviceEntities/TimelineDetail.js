const { Model, DataTypes } = require('sequelize');

class TimelineDetail extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING(60),
      complete: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Timeline, { foreignKey: 'id_timeline', as: 'timeline' });
  }
}

module.exports = TimelineDetail;
