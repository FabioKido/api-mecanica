const Payment = require('../../models/serviceEntities/Payment');

exports.getPayments = async (req, res) => {
  const { id_order } = req.query;

  const payments = await Payment.findAll({
    where: {
      id_order
    }
  });

  res.status(200).json({
    data: payments
  });
}

exports.getPayment = async (req, res, next) => {
  try {
    const { id_payment } = req.params;

    const payment = await Payment.findByPk(id_payment);

    if (!payment) return next(new Error('Pagamento não existe'));

    res.status(200).json({
      data: payment
    });
  } catch (error) {
    next(error)
  }
}

exports.addPayment = async (req, res, next) => {
  try {
    const { id_order } = req.params;
    const {
      date,
      parcels,
      status
    } = req.body;

    const payment = await Payment.create({
      id_order: id_order || null,
      date,
      parcels,
      status
    });

    res.json({
      data: payment,
      message: "Pagamento cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.updatePayment = async (req, res, next) => {
  try {

    const { id_payment } = req.params;
    const {
      date,
      parcels,
      status
    } = req.body;

    const payment = await Payment.update( {
      date,
      parcels,
      status
     },
     {
      where: {
        id: id_payment
      }
    });

    res.json({
      data: payment,
      message: "Pagamento atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.deletePayment = async (req, res, next) => {
  try {

    const { id_payment } = req.params;

    Payment.destroy({
      where: {
        id: id_payment
      }
    })

    res.status(200).json({
      data: null,
      message: 'Pagamento foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
