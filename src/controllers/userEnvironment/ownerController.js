const User = require('../../models/userEntities/User');
const Owner = require('../../models/userEntities/Owner');

module.exports = {

  async show(req, res) {
    const { id_user } = req.params;

    const owner = await Owner.findOne({
      where: {
        id_user
      }
    });

    return res.json(owner);
  },

  async update(req, res) {
    const { id_owner } = req.params;
    const {
      name,
      sex,
      cpf,
      rg,
      birthday,
      orgao_expeditor
    } = req.body;

    const owner = await Owner.update({
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
