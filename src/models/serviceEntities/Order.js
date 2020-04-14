const { Model, DataTypes } = require('sequelize');

class Order extends Model {
  static init(sequelize) {
    super.init({
      km: DataTypes.INTEGER,
      tanque: DataTypes.INTEGER,
      internal_control: DataTypes.STRING,
      prevision_exit: DataTypes.DATE,
      observations: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.OrderService, { foreignKey: 'id_order', as: 'order_services' });
    this.belongsTo(models.Vehicle, { foreignKey: 'id_vehicle', as: 'vehicle' });
    this.hasOne(models.Timeline, { foreignKey: 'id_timeline', as: 'timeline' });
    this.hasOne(models.Diagnostic, { foreignKey: 'id_diagnostic', as: 'diagnostic' });
    this.hasOne(models.Schedule, { foreignKey: 'id_schedule', as: 'schedule' });
    this.hasOne(models.Preventive, { foreignKey: 'id_preventive', as: 'preventive' });
    this.hasOne(models.Record, { foreignKey: 'id_record', as: 'record' });
  }
}

module.exports = Order;
