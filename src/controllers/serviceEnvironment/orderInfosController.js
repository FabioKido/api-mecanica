const Order = require('../../models/serviceEntities/Order');

exports.getDiagnosticOrder = async (req, res, next) => {
  try {
    const { id_diagnostic } = req.params;

    const order = await Order.findOne({
      where: {
        id_diagnostic
      }
    });

    if (!order) return next(new Error('Ordem de Serviço não existe'));

    res.status(200).json({
      order
    });
  } catch (error) {
    next(error)
  }
}

exports.getPreventiveOrder = async (req, res, next) => {
  try {
    const { id_preventive } = req.params;

    const order = await Order.findOne({
      where: {
        id_preventive
      }
    });

    if (!order) return next(new Error('Ordem de Serviço não existe'));

    res.status(200).json({
      order
    });
  } catch (error) {
    next(error)
  }
}

exports.getScheduleOrder = async (req, res, next) => {
  try {
    const { id_schedule } = req.params;

    const order = await Order.findOne({
      where: {
        id_schedule
      }
    });

    if (!order) return next(new Error('Ordem de Serviço não existe'));

    res.status(200).json({
      order
    });
  } catch (error) {
    next(error)
  }
}

exports.getRecordOrder = async (req, res, next) => {
  try {
    const { id_record } = req.params;

    const order = await Order.findOne({
      where: {
        id_record
      }
    });

    if (!order) return next(new Error('Ordem de Serviço não existe'));

    res.status(200).json({
      order
    });
  } catch (error) {
    next(error)
  }
}