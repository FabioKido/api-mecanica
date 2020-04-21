const Group = require('../../models/userEntities/Group');
const Permission = require('../../models/userEntities/Permission');

exports.getPermissionInGroup = async (req, res) => {

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

exports.addPermissionInGroup = async (req, res, next) => {
  try{
    const { id_permission } = req.params;
    const { id_group } = req.body;

    const permission = await Permission.findByPk(id_permission);
    const group = await Group.findByPk(id_group);

    if (!permission) {
      return res.status(400).json({ error: 'Permission não encontrada' });
    }

    await permission.addGroup(group);

    return res.json(group);

  } catch (error) {
    next(error)
  }
}

exports.deletePermissionInGroup = async (req, res, next) => {

  const { id_permission } = req.params;
  const { id } = req.query;

  const permission = await Permission.findByPk(id_permission);

  if (!permission) {
    return res.status(400).json({ error: 'Permission não encontrada' });
  }

  const group = await Group.findOne({
    where: { id }
  });

  await permission.removeGroup(group);

  return res.json({message: "Relacionamento deletado"});
}
