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
      access_token: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Owner, { foreignKey: 'id_user', as: 'owners' });
    this.hasMany(models.Worker, { foreignKey: 'id_user', as: 'workers' });
    this.hasMany(models.Company, { foreignKey: 'id_user', as: 'companies' });
    this.belongsTo(models.AccessPlan, { foreignKey: 'id_access_plan', as: 'access_plans' });
    //this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
  }
}

module.exports = User;
