const User = require('../../models/userEntities/User');
const Worker = require('../../models/userEntities/Worker');

module.exports = {

  async getWorkerContact(req, res) {
    const { id_worker } = req.params;

    const worker = await Worker.findByPk(id_worker, {
      include: { association: 'contact' }
    })

    return res.json(worker.contact);
  },

  async addWorker(req, res) {

    const { id_user } = req.params;
    const { name, sex, cpf, rg, birthday, orgao_expeditor, id_contact } = req.body;

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
      id_contact,
      id_user,
    });

    return res.json(worker);
  }
};
