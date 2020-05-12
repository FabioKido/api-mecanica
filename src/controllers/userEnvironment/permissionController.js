const Permission = require('../../models/userEntities/Permission');

exports.index = async (req, res, next) => {
  const permissions = await Permission.findAll();
  res.status(200).json({
    data: permissions
  });
}

exports.show = async (req, res, next) => {
  try {
    const { permissionId } = req.params;
    const permission = await Permission.findByPk(permissionId);
    if (!permission) return next(new Error('Permissão não existe'));
    res.status(200).json({
      data: permission
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {

    const userId = req.user.id;
    const { name, action, enable } = req.body;

    const newPermission = await Permission.create({
      name,
      action,
      enable,
      created_by: userId
    });

    res.json({
      data: newPermission,
      message: "Permissão cadastrada com sucesso"
    });
  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {
    const { permissionId } = req.params;

    Permission.destroy({
      where: {
        id: permissionId
      }
    })

    res.status(200).json({
      data: null,
      message: "Permissão deletada com sucesso"
    });
  } catch (error) {
    next(error)
  }
}
