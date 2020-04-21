const User = require('../../models/userEntities/User');
const Group = require('../../models/userEntities/Group');

exports.getUserInGroup = async (req, res) => {

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

exports.addUserInGroup = async (req, res, next) => {
  try{
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

exports.deleteUserInGroup = async (req, res, next) => {

  const { id_user } = req.params;
  const { id } = req.query;

  const user = await User.findByPk(id_user);

  if (!user) {
    return res.status(400).json({ error: 'User não encontrado' });
  }

  const group = await Group.findOne({
    where: { id }
  });

  await user.removeGroup(group);

  return res.json({message: "Relacionamento deletado"});
}
