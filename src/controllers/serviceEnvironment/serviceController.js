const Service = require('../../models/serviceEntities/Service');

exports.index = async (req, res) => {
  const services = await Service.findAll();

  res.status(200).json({
    services
  });
}

exports.show = async (req, res, next) => {
  try {
    const { id_service } = req.params;

    const service = await Service.findByPk(id_service);

    if (!service) return next(new Error('Serviço não existe'));

    res.status(200).json({
      service
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const { name } = req.body;

    // TODO Melhorar isso aqui, para otimizar.
    const service = await Service.findOne({
      where: {
        name
      }
    });

    if (service) {
      res.status(401).json({
        error: "Serviço já existe na base de dados"
      })

      return;
    };

    const serv = await Service.create({
      name
    });

    res.json({
      serv,
      message: "Serviço cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.update = async (req, res, next) => {
  try {

    const { id_service } = req.params;
    const { name } = req.body;

    const service = await Service.update({
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

exports.destroy = async (req, res, next) => {
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
