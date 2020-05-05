const OrderService = require('../../models/serviceEntities/OrderService');

exports.index = async (req, res) => {
  const { id_order } = req.query;

  const orderServices = await OrderService.findAll({
    where: {
      id_order
    }
  });

  res.status(200).json({
    data: orderServices
  });
}

exports.store = async (req, res, next) => {
  try {
    const { id_order } = req.params;
    const {
      id_user,
      id_service,
      type,
      commission,
      price,
      discount,
      premium,
      approved
    } = req.body;

    const orderService = await OrderService.create({
      id_user: id_user || null,
      id_order: id_order || null,
      id_service: id_service || null,
      type,
      commission,
      price,
      discount,
      premium,
      approved
    });

    res.json({
      data: orderService,
      message: "Item de Serviço cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.update = async (req, res, next) => {
  try {

    const { id_os } = req.params;
    const {
      type,
      commission,
      price,
      discount,
      premium,
      approved
    } = req.body;

    const orderService = await OrderService.update( {
      type,
      commission,
      price,
      discount,
      premium,
      approved
     },
     {
      where: {
        id: id_os
      }
    });

    res.json({
      data: orderService,
      message: "Item de Serviço atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_os } = req.params;

    OrderService.destroy({
      where: {
        id: id_os
      }
    })

    res.status(200).json({
      data: null,
      message: 'Item de Serviço foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
