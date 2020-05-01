const OrderProduct = require('../../models/serviceEntities/OrderProduct');

exports.getOrderProducts = async (req, res) => {
  const { id_os } = req.query;

  const orderProducts = await OrderProduct.findAll({
    where: {
      id_order_service: id_os
    }
  });

  res.status(200).json({
    data: orderProducts
  });
}

exports.addOrderProduct = async (req, res, next) => {
  try {
    const { id_os } = req.params;
    const {
      id_product,
      id_provider,
      qtd,
      acquisition,
      total_sale,
      unit_sale,
      unit_cost,
      discount
    } = req.body;

    const orderProduct = await OrderProduct.create({
      id_order_service: id_os || null,
      id_product: id_product || null,
      id_provider: id_provider || null,
      qtd,
      acquisition,
      total_sale,
      unit_sale,
      unit_cost,
      discount
    });

    res.json({
      data: orderProduct,
      message: "Item de Produto cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.updateOrderProduct = async (req, res, next) => {
  try {

    const { id_op } = req.params;
    const {
      qtd,
      acquisition,
      total_sale,
      unit_sale,
      unit_cost,
      discount
    } = req.body;

    const orderProduct = await OrderProduct.update( {
      qtd,
      acquisition,
      total_sale,
      unit_sale,
      unit_cost,
      discount
     },
     {
      where: {
        id: id_op
      }
    });

    res.json({
      data: orderProduct,
      message: "Item de Produto atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.deleteOrderProduct = async (req, res, next) => {
  try {

    const { id_op } = req.params;

    OrderProduct.destroy({
      where: {
        id: id_op
      }
    })

    res.status(200).json({
      data: null,
      message: 'Item de Produto foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
