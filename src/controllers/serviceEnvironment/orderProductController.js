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
      id_prod_acq: id_prod_acq || null,
      qtd: qtd || 0,
      acquisition,
      total_sale: Number(unit_sale) * Number(qtd) - Number(discount),
      unit_sale: unit_sale || 0,
      unit_cost,
      discount: discount || 0
    });

    if (qtd > 0) {
      const { qtd: quantity } = await ProductAcquisition.findByPk(id_prod_acq);

      await ProductAcquisition.update({
        qtd: Number(quantity) - Number(qtd)
      },
        {
          where: {
            id: id_prod_acq
          }
        });
    }

    res.json({
      data: orderProduct,
      message: "Item de Produto cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

// TODO Ver se o acquisition é isso mesmo(data da compra) ou é a data da venda do produto.
exports.update = async (req, res, next) => {
  try {

    const { id_op } = req.params;
    const {
      qtd,
      total_sale,
      unit_sale,
      discount,
      id_prod_acq,
      qtd_ant
    } = req.body;

    const { qtd: quantity } = await ProductAcquisition.findByPk(id_prod_acq);

    if (qtd > 0) {
      const orderProduct = await OrderProduct.update({
        qtd,
        total_sale,
        unit_sale,
        discount
      },
        {
          where: {
            id: id_op
          }
        });

      if (qtd !== qtd_ant) {
        await ProductAcquisition.update({
          qtd: (Number(quantity) + Number(qtd_ant)) - Number(qtd)
        },
          {
            where: {
              id: id_prod_acq
            }
          });
      }

      res.json({
        data: orderProduct,
        message: "Item de Produto atualizado com sucesso"
      })
    } else {
      return next(new Error('Quantidade não pode ser ZERO ou Igual a anterior'));
    }

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_op } = req.params;
    const { qtd, id_prod_acq } = await OrderProduct.findByPk(id_op);

    const { qtd: quantity } = await ProductAcquisition.findByPk(id_prod_acq);

    await ProductAcquisition.update({
      qtd: Number(quantity) + Number(qtd)
    },
      {
        where: {
          id: id_prod_acq
        }
      });

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
