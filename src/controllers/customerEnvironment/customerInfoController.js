const Customer = require('../../models/customerEntities/Customer');

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { address } = await Customer.findByPk(id, {
      include: { association: 'address' }
    })

    const { contact } = await Customer.findByPk(id, {
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
