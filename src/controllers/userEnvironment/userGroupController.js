const User = require('../../models/userEntities/User');
const Group = require('../../models/userEntities/Group');

exports.index = async (req, res) => {

  const { id_group } = req.query;

  const group = await Group.findByPk(id_group, {
    include: {
      association: 'users',
      attributes: ['id', 'username'],
      through: {
        attributes: []
      }
    }
  });

  return res.json(group.users);
}

exports.show = async (req, res) => {

  const { id_user } = req.params;

  const user = await User.findByPk(id_user, {
    include: {
      association: 'groups',
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  })

  return res.json(user.groups);
}

exports.store = async (req, res, next) => {
  try {
    const { id_user } = req.params;
    const { id_group } = req.body;

    const user = await User.findByPk(id_user);
    const group = await Group.findByPk(id_group);

    if (!user) {
      return res.status(400).json({ error: 'User não encontrado' });
    }

    await user.addGroup(group);

    return res.json(group);

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res) => {

  const { id_user } = req.params;
  const { id_group } = req.query;

  const user = await User.findByPk(id_user);

  if (!user) {
    return res.status(400).json({ error: 'User não encontrado' });
  }

  const group = await Group.findByPk(id_group);

  await user.removeGroup(group);

  return res.json({ message: "Usuário retirado do Grupo" });
}
