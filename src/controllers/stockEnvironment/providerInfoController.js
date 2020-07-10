const Provider = require('../../models/stockEntities/Provider');

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { address } = await Provider.findByPk(id, {
      include: { association: 'address' }
    })

    const { contact } = await Provider.findByPk(id, {
      include: { association: 'contact' }
    })

    res.json({
      data: { contact, address },
      message: "Informações de Endereço e Contato"
    });
  } catch (error) {
    next(error)
  }
}