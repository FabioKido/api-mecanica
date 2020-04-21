const Permission = require('../../models/userEntities/Permission');

exports.getPermissions = async (req, res, next) => {
  const permissions = await Permission.findAll();
  res.status(200).json({
    data: permissions
  });
}

exports.getPermission = async (req, res, next) => {
  try {
    const { permissionId } = req.params;
    const permission = await Permission.findByPk(permissionId);
    if (!permission) return next(new Error('Permission não existe'));
    res.status(200).json({
      data: permission
    });
  } catch (error) {
    next(error)
  }
}

exports.createPermission = async (req, res, next) => {
  try {
    const { name, action, enable } = req.body;

    const newPermission = await Permission.create({
      name,
      action,
      enable,
    });

    res.json({
      data: newPermission,
      message: "Permissão cadastrada com sucesso"
    });
  } catch (error) {
    next(error)
  }
}

exports.deletePermission = async (req, res, next) => {
  try {
    const { permissionId } = req.params;

    Permission.destroy({
      where: {
        id: permissionId
      }
    })

    res.status(200).json({
      data: null,
      message: "Permission deletada com sucesso"
    });
  } catch (error) {
    next(error)
  }
}
