const User = require('../../models/userEntities/User');
const Worker = require('../../models/userEntities/Worker');

module.exports = {

  async index(req, res, next) {
    try {
      const id_user = req.user;

      const workers = await User.findAll({
        where: {
          created_by: id_user
        }
      });

      res.status(200).json({
        workers
      });
    } catch (error) {
      next(error)
    }
  },

  async show(req, res) {
    const { id_user } = req.params;

    const worker = await Worker.findOne({
      where: {
        id_user
      }
    });

    return res.json(worker);
  },

  // TODO Colocar 'enable' do user e atualizá-lo.
  async update(req, res) {
    const { id_worker } = req.params;
    const {
      name,
      sex,
      cpf,
      rg,
      birthday,
      orgao_expeditor,
      ctps,
      salary_hour,
      salary,
      commission,
      admission,
      admission_exam,
      next_exam,
      last_vacation,
      nest_vacation,
      rescission,
      rescission_exam,
      rescission_reason,
      observations,
      enable,
      id_user
    } = req.body;

    const worker = await Worker.update({
      name,
      sex,
      cpf,
      rg,
      birthday,
      orgao_expeditor,
      ctps,
      salary_hour,
      salary,
      commission,
      admission,
      admission_exam,
      next_exam,
      last_vacation,
      nest_vacation,
      rescission,
      rescission_exam,
      rescission_reason,
      observations
    },
      {
        where: {
          id: id_worker
        }
      });

    res.json({
      data: worker,
      message: "Colaborador atualizado com sucesso"
    })
  }

};
