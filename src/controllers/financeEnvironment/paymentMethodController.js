const PaymentMethod = require('../../models/financeEntities/PaymentMethod');

exports.index = async (req, res) => {
  const payment_methods = await PaymentMethod.findAll();

  res.status(200).json({
    data: payment_methods
  });
}

exports.show = async (req, res, next) => {
  try {
    const { id_payment_method } = req.params;

    const payment_method = await PaymentMethod.findByPk(id_payment_method);

    if (!payment_method) return next(new Error('Metodo de Pagamento não existe'));

    res.status(200).json({
      data: payment_method
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const {
      method,
      operator,
      taxa
    } = req.body;

    const payment_method = await PaymentMethod.create({
      method,
      operator,
      taxa,
      created_by: null,
      updated_by: null
    });

    res.json({
      data: payment_method,
      message: "Metodo de Pagamento cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.update = async (req, res, next) => {
  try {

    const { id_payment_method } = req.params;
    const {
      method,
      operator,
      taxa
    } = req.body;

    const payment_method = await PaymentMethod.update( {
      method,
      operator,
      taxa
     },
     {
      where: {
        id: id_payment_method
      }
    });

    res.json({
      data: payment_method,
      message: "Metodo de Pagamento atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_payment_method } = req.params;

    PaymentMethod.destroy({
      where: {
        id: id_payment_method
      }
    })

    res.status(200).json({
      data: null,
      message: 'Metodo de Pagamento foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
