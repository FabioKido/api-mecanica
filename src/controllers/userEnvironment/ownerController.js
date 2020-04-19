const User = require('../../models/userEntities/User');
const Owner = require('../../models/userEntities/Owner');

module.exports = {

  async getOwnerContact(req, res) {
    const { id_owner } = req.params;

    const owner = await Owner.findByPk(id_owner, {
      include: { association: 'contact' }
    })

    return res.json(owner.contact);
  },

  async getOwnerAddress(req, res) {
    const { id_owner } = req.params;

    const owner = await Owner.findByPk(id_owner, {
      include: { association: 'address' }
    })

    return res.json(owner.address);
  },

  async addOwner(req, res) {

    const { id_user } = req.params;
    const { name, sex, cpf, rg, birthday, orgao_expeditor, id_contact, id_address } = req.body;

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
      id_contact,
      id_address,
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
