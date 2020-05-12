const Order = require('../../models/serviceEntities/Order');

exports.index = async (req, res) => {
  const orders = await Order.findAll();

  res.status(200).json({
    data: orders
  });
}

exports.show = async (req, res, next) => {
  try {
    const { id_order } = req.params;

    const order = await Order.findByPk(id_order);

    if (!order) return next(new Error('Ordem de Serviço não existe'));

    res.status(200).json({
      data: order
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const {
      id_vehicle,
      id_timeline,
      id_diagnostic,
      id_schedule,
      id_preventive,
      id_record,
      km,
      tanque,
      internal_control,
      prevision_exit,
      observations,
      active
    } = req.body;

    const order = await Order.create({
      id_vehicle: id_vehicle || null,
      id_timeline: id_timeline || null,
      id_diagnostic: id_diagnostic || null,
      id_schedule: id_schedule || null,
      id_preventive: id_preventive || null,
      id_record: id_record || null,
      km,
      tanque,
      internal_control,
      prevision_exit,
      observations,
      active,
      created_by: userId
    });

    res.json({
      data: order,
      message: "Ordem de Serviço cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.update = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id_order } = req.params;
    const {
      km,
      tanque,
      internal_control,
      prevision_exit,
      observations,
      active
    } = req.body;

    const order = await Order.update( {
      km,
      tanque,
      internal_control,
      prevision_exit,
      observations,
      active,
      updated_by: userId
     },
     {
      where: {
        id: id_order
      }
    });

    res.json({
      data: order,
      message: "Ordem de Serviço atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_order } = req.params;

    Order.destroy({
      where: {
        id: id_order
      }
    })

    res.status(200).json({
      data: null,
      message: 'Ordem de Serviço foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
