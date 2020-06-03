const Preventive = require('../../models/serviceEntities/Preventive');

exports.index = async (req, res) => {
  const preventives = await Preventive.findAll();

  res.status(200).json({
    data: preventives
  });
}

exports.show = async (req, res, next) => {
  try {
    const { id_preventive } = req.params;

    const preventive = await Preventive.findByPk(id_preventive);

    if (!preventive) return next(new Error('Revisão Preventiva não existe'));

    res.status(200).json({
      data: preventive
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const {
      date,
      status,
      id_vehicle,
      id_service
    } = req.body;

    const preventive = await Preventive.create({
      id_vehicle: id_vehicle || null,
      id_service: id_service || null,
      date,
      status,
      enable: true,
      created_by: userId
    });

    res.json({
      data: preventive,
      message: "Revisão Preventiva cadastrada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.update = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_preventive } = req.params;
    const {
      date,
      status,
      enable
    } = req.body;

    const preventive = await Preventive.update( {
      date,
      status,
      enable,
      updated_by: userId
     },
     {
      where: {
        id: id_preventive
      }
    });

    res.json({
      data: preventive,
      message: "Revisão Preventiva atualizada com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_preventive } = req.params;

    Preventive.destroy({
      where: {
        id: id_preventive
      }
    })

    res.status(200).json({
      data: null,
      message: 'Revisão Preventiva foi deletada'
    });

  } catch (error) {
    next(error)
  }
}
