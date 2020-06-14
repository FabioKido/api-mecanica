const { Model, DataTypes } = require('sequelize');

class Worker extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      sex: DataTypes.STRING(1),
      cpf: DataTypes.STRING(14),
      rg: DataTypes.STRING(14),
      birthday: DataTypes.DATEONLY,
      orgao_expeditor: DataTypes.STRING(30),
      ctps: DataTypes.STRING(13),
      salary_hour: DataTypes.DECIMAL(8, 2),
      salary: DataTypes.DECIMAL(8, 2),
      commission: DataTypes.DECIMAL(8, 2),
      admission: DataTypes.DATE,
      admission_exam: DataTypes.DATE,
      next_exam: DataTypes.DATE,
      last_vacation: DataTypes.DATE,
      nest_vacation: DataTypes.DATE,
      rescission: DataTypes.DATE,
      rescission_exam: DataTypes.DATE,
      rescission_reason: DataTypes.STRING,
      observations: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'id_user', as: 'user' });
  }
}

module.exports = Worker;
