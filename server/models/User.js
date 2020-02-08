const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      type: DataTypes.STRING,
      enable:  DataTypes.BOOLEAN,
      created_by: DataTypes.INTEGER,
      updated_by: DataTypes.INTEGER,
      last_login: DataTypes.DATE,
      password_requested_at: DataTypes.DATE,
      accept_terms_privacy: DataTypes.BOOLEAN,
      id_access_plan: DataTypes.INTEGER,
      access_token: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = User;
