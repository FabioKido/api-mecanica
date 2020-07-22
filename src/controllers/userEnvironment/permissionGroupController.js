const Group = require('../../models/userEntities/Group');
const Permission = require('../../models/userEntities/Permission');

exports.index = async (req, res) => {

  const { id_group } = req.query;

  const group = await Group.findByPk(id_group, {
    include: {
      association: 'permissions',
      attributes: ['id', 'name', 'action'],
      through: {
        attributes: []
      }
    }
  });

  return res.json(group.permissions);
}

exports.show = async (req, res) => {

  const { id_permission } = req.params;

  const permission = await Permission.findByPk(id_permission, {
    include: {
      association: 'groups',
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  })

  return res.json(permission.groups);
}

exports.store = async (req, res, next) => {
  try {
    const { id_permission } = req.params;
    const { id_group } = req.body;

    const permission = await Permission.findByPk(id_permission);
    const group = await Group.findByPk(id_group);

    if (!permission) {
      return res.status(400).json({ error: 'Permissão não encontrada' });
    }

    await permission.addGroup(group);

    return res.json(group);

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res) => {

  const { id_permission } = req.params;
  const { id_group } = req.query;

  const permission = await Permission.findByPk(id_permission);

  if (!permission) {
    return res.status(400).json({ error: 'Permissão não encontrada' });
  }

  const group = await Group.findByPk(id_group);

  await permission.removeGroup(group);

  return res.json({ message: "Permissão retirada do Grupo" });
}
