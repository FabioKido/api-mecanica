const User = require('../../models/userEntities/User');
const Owner = require('../../models/userEntities/Owner');

module.exports = {

  async getOwner(req, res) {
    const { id_owner } = req.params;

    const owner = await Owner.findByPk(id_owner);

    return res.json(owner);
  },

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

  async updateOwner(req, res) {
    const { id_owner } = req.params;
    const {
      name,
      sex,
      cpf,
      rg,
      birthday,
      orgao_expeditor
    } = req.body;

    const owner = await Owner.update( {
      name,
      sex,
      cpf,
      rg,
      birthday,
      orgao_expeditor
     },
     {
      where: {
        id: id_owner
      }
    });

    res.json({
      data: owner,
      message: "Dono atualizado com sucesso"
    })
  }

  //inner join
  /*async getUsersOwners(req, res) {
    const { id_user } = req.params;

    const user = await User.findByPk(id_user, {
      include: { association: 'owners' }
    });

    return res.json(user.owners);
  }*/

};
