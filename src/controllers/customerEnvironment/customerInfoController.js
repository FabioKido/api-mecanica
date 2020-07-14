const Customer = require('../../models/customerEntities/Customer');
const Vehicle = require('../../models/customerEntities/Vehicle');

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

exports.index = async (req, res) => {
  try {
    const { id_customer } = req.params;

    const vehicles = await Vehicle.findAll({
      where: {
        id_customer
      }
    });

    res.status(200).json({
      vehicles
    });
  } catch (error) {
    next(error)
  }
}