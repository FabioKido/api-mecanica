const Order = require('../../models/serviceEntities/Order');

exports.getDiagnosticOrder = async (req, res, next) => {
  try {
    const { id_diagnostic } = req.params;

    const order = await Order.findOne({
      where: {
        id_diagnostic
      }
    });

    if (!order) {
      res.status(400).json({
        error: "Ordem de Serviço não existe"
      })

      return;
    };

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

    if (!order) {
      res.status(400).json({
        error: "Ordem de Serviço não existe"
      })

      return;
    };

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

    if (!order) {
      res.status(400).json({
        error: "Ordem de Serviço não existe"
      })

      return;
    };

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

    if (!order) {
      res.status(400).json({
        error: "Ordem de Serviço não existe"
      })

      return;
    };

    res.status(200).json({
      order
    });
  } catch (error) {
    next(error)
  }
}