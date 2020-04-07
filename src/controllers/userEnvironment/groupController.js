const User = require('../../models/userEntities/User');
const Group = require('../../models/userEntities/Group');
const Permission = require('../../models/userEntities/Permission');

exports.getGroups = async (req, res, next) => {
  const groups = await Group.findAll();
  res.status(200).json({
    data: groups
  });
}

exports.getGroup = async (req, res, next) => {
  try {
    const groupId = req.params.groupId;
    const group = await Group.findByPk(groupId);
    if (!group) return next(new Error('Grupo não existe'));
    res.status(200).json({
      data: group
    });
  } catch (error) {
    next(error)
  }
}

exports.createGroup = async (req, res, next) => {
  try {
    const { name, description, enable } = req.body;

    const newGroup = await Group.create({
      name,
      description,
      enable,
    });

    res.json({
      data: newGroup,
      message: "Grupo cadastrado com sucesso"
    });
  } catch (error) {
    next(error)
  }
}

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
  const { id } = req.body;

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

exports.getPermissionInGroup = async (req, res, next) => {
  try {
    const permissionId = req.params.permissionId;
    const permission = await Permission.findByPk(permissionId);
    if (!permission) return next(new Error('Permission não existe'));
    res.status(200).json({
      data: permission
    });
  } catch (error) {
    next(error)
  }
}
