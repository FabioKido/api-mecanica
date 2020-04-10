const { Model, DataTypes } = require('sequelize');

class Message extends Model {
  static init(sequelize) {
    super.init({
      sender: DataTypes.STRING,
      receptor: DataTypes.STRING,
      subject: DataTypes.STRING,
      message: DataTypes.STRING,
      sent: DataTypes.DATE,
    }, {
      sequelize
    })
  }
}

module.exports = Message;
