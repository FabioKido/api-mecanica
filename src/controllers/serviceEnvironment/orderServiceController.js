const OrderService = require('../../models/serviceEntities/OrderService');

exports.index = async (req, res, next) => {
  try {
    const { id_order } = req.query;

    const order_services = await OrderService.findAll({
      where: {
        id_order
      }
    });

    res.status(200).json({
      order_services
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_order } = req.params;
    const {
      id_service,
      type,
      commission,
      price,
      discount,
      premium,
      approved
    } = req.body;

    const total = price ? Number(price) - (Number(discount) || 0) : 0;

    const orderService = await OrderService.create({
      id_user: userId,
      id_order: id_order || null,
      id_service: id_service || null,
      type,
      commission: commission || 0,
      price: total,
      discount: discount || 0,
      premium: premium || 0,
      approved: approved || false
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
      approved,
      disc_ant
    } = req.body;

    const total = price ? (Number(price) + Number(disc_ant)) - Number(discount) : 0;

    const orderService = await OrderService.update({
      type,
      commission,
      price: total,
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
