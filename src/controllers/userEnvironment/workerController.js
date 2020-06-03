const User = require('../../models/userEntities/User');
const Worker = require('../../models/userEntities/Worker');

module.exports = {

  async index(req, res) {
    const id_user = req.user;

    const user = await User.findByPk(id_user, {
      include: { association: 'workers' }
    });

    return res.json(user.workers);
  },

  async show(req, res) {
    const { id_worker } = req.params;

    const worker = await Worker.findByPk(id_worker);

    return res.json(worker);
  },

  async store(req, res) {

    const id_user = req.user;
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
      observations
    } = req.body;

    const user = await User.findByPk(id_user);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const worker = await Worker.create({
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
      id_user
    });

    return res.json(worker);
  },

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
      observations
    } = req.body;

    const worker = await Worker.update( {
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
