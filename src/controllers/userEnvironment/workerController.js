const User = require('../../models/userEntities/User');
const Worker = require('../../models/userEntities/Worker');

module.exports = {

  async addWorker(req, res) {

    const { id_user } = req.params;
    const { name, sex, cpf, rg, birthday, orgao_expeditor } = req.body;

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
      id_user,
    });

    return res.json(worker);
  }
};
