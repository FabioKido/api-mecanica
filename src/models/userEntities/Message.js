const { Model, DataTypes } = require('sequelize');

// Mensagem poderá ir para outra API

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
