const User = require('../../models/userEntities/User');

exports.index = async (req, res, next) => {
  try {
    const { id_group } = req.query;

    const user_groups = await User.findAll({
      where: {
        id_group
      }
    });

    res.status(200).json({
      user_groups
    });

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {

  try {

    const userId = req.user;
    const { id_worker } = req.params;
    const {
      id_group
    } = req.body

    const user = await User.update({
      id_group: id_group || null,
      updated_by: userId,
    },
      {
        where: {
          id: id_worker
        }
      });

    res.status(200).json({
      data: { user },
      message: 'Usuário foi atualizado'
    });

  } catch (error) {
    next(error)
  }
}