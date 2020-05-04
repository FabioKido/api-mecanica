const Group = require('../../models/userEntities/Group');

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
      created_by: null,
      updated_by: null
    });

    res.json({
      data: newGroup,
      message: "Grupo cadastrado com sucesso"
    });
  } catch (error) {
    next(error)
  }
}

exports.deleteGroup = async (req, res, next) => {
  try {
    const { groupId } = req.params;

    Group.destroy({
      where: {
        id: groupId
      }
    })

    res.status(200).json({
      data: null,
      message: "Grupo deletado com sucesso"
    });
  } catch (error) {
    next(error)
  }
}
