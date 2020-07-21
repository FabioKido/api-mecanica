const OrderProduct = require('../../models/serviceEntities/OrderProduct');
const ProductAcquisition = require('../../models/stockEntities/ProductAcquisition');

exports.index = async (req, res, next) => {
  try {
    const { id_os } = req.query;

    const order_products = await OrderProduct.findAll({
      where: {
        id_order_service: id_os
      }
    });

    res.status(200).json({
      order_products
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const { id_os } = req.params;
    const {
      id_product,
      id_provider,
      qtd,
      acquisition,
      unit_sale,
      unit_cost,
      discount,
      id_prod_acq
    } = req.body;

    const orderProduct = await OrderProduct.create({
      id_order_service: id_os || null,
      id_product: id_product || null,
      id_provider: id_provider || null,
      qtd: qtd || 1,
      acquisition,
      total_sale: Number(unit_sale) * Number(qtd) - Number(discount),
      unit_sale: unit_sale || 0,
      unit_cost,
      discount: discount || 0
    });

    const { qtd: quantity } = await ProductAcquisition.findByPk(id_prod_acq);

    await ProductAcquisition.update({
      qtd: Number(quantity) - Number(qtd)
    },
      {
        where: {
          id: id_prod_acq
        }
      });

    res.json({
      data: orderProduct,
      message: "Item de Produto cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
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

    const orderProduct = await OrderProduct.update({
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
      message: "Item de Produto atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
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
