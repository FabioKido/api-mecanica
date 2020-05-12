const User = require('../../models/userEntities/User');

exports.show = async (req, res, next) => {
  try {
    // User recebido pelo Token
    const user = req.user;

    const { address } = await User.findByPk(user.id, {
      include: { association: 'address' }
    })

    const { contact } = await User.findByPk(user.id, {
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
