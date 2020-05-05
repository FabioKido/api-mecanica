const User = require('../../models/userEntities/User');

exports.show = async (req, res, next) => {
  try {
    const { id_user } = req.params;

    const { address } = await User.findByPk(id_user, {
      include: { association: 'address' }
    })

    const { contact } = await User.findByPk(id_user, {
      include: { association: 'contact' }
    })

    res.json({
      data: { contact, address},
      message: "Informações de Endereço e Contato"
    });
  } catch (error) {
    next(error)
  }
}
