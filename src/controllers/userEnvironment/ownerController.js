const User = require('../../models/userEntities/User');
const Owner = require('../../models/userEntities/Owner');

module.exports = {

  async addOwner(req, res) {

    const { id_user } = req.params;
    const { name, sex, cpf, rg, birthday, orgao_expeditor } = req.body;

    const user = await User.findByPk(id_user);

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const owner = await Owner.create({
      name,
      sex,
      cpf,
      rg,
      birthday,
      orgao_expeditor,
      id_user,
    });

    return res.json(owner);
  },

  //inner join
  /*async getUsersOwners(req, res) {
    const { id_user } = req.params;

    const user = await User.findByPk(id_user, {
      include: { association: 'owners' }
    });

    return res.json(user.owners);
  }*/

};
