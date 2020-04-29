const Service = require('../../models/serviceEntities/Service');

exports.getServices = async (req, res) => {
  const services = await Service.findAll();

  res.status(200).json({
    data: services
  });
}

exports.getService = async (req, res, next) => {
  try {
    const { id_service } = req.params;

    const service = await Service.findByPk(id_service);

    if (!service) return next(new Error('Serviço não existe'));

    res.status(200).json({
      data: service
    });
  } catch (error) {
    next(error)
  }
}

exports.addService = async (req, res, next) => {
  try {
    const { name } = req.body;

    const service = await Service.create({
      name
    });

    res.json({
      data: service,
      message: "Serviço cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.updateService = async (req, res, next) => {
  try {

    const { id_service } = req.params;
    const { name } = req.body;

    const service = await Service.update( {
      name
     },
     {
      where: {
        id: id_service
      }
    });

    res.json({
      data: service,
      message: "Serviço atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.deleteService = async (req, res, next) => {
  try {

    const { id_service } = req.params;

    Service.destroy({
      where: {
        id: id_service
      }
    })

    res.status(200).json({
      data: null,
      message: 'Serviço foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
