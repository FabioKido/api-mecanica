const Group = require('../../models/userEntities/Group');

exports.index = async (req, res, next) => {
  try {
    const id_user = req.user;

    const groups = await Group.findAll({
      where: {
        created_by: id_user
      }
    });

    res.status(200).json({
      groups
    });
  } catch (error) {
    next(error)
  }
}

exports.show = async (req, res, next) => {
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

exports.store = async (req, res, next) => {
  try {

    const userId = req.user;
    const { name, description } = req.body;

    const newGroup = await Group.create({
      name,
      description,
      enable: true,
      created_by: userId
    });

    res.json({
      data: newGroup,
      message: "Grupo cadastrado com sucesso"
    });
  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {
    const userId = req.user;
    const { groupId } = req.params;
    const {
      name,
      description
    } = req.body;

    const group = await Group.update({
      name,
      description,
      updated_by: userId
    },
      {
        where: {
          id: groupId
        }
      });

    res.json({
      data: group,
      message: "Grupo atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
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
