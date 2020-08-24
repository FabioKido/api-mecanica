const Schedule = require('../../models/serviceEntities/Schedule');

exports.index = async (req, res) => {
  try {
    const workshop = req.workshop;

    const schedules = await Schedule.findAll({
      where: {
        workshop: workshop
      }
    });

    res.status(200).json({
      schedules
    });
  } catch (error) {
    next(error)
  }
}

exports.show = async (req, res, next) => {
  try {
    const { id_schedule } = req.params;

    const schedule = await Schedule.findByPk(id_schedule);

    if (!schedule) return next(new Error('Agendamento não existe'));

    res.status(200).json({
      data: schedule
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const workshop = req.workshop;
    const {
      date,
      status,
      observations,
      id_vehicle
    } = req.body;

    const schedule = await Schedule.create({
      id_vehicle: id_vehicle || null,
      date: date || Date.now(),
      status,
      observations,
      enable: true,
      workshop: workshop,
      created_by: userId
    });

    res.json({
      data: schedule,
      message: "Agendamento cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {
    const userId = req.user;
    const { id_schedule } = req.params;
    const {
      date,
      status,
      observations
    } = req.body;

    const schedule = await Schedule.update({
      date,
      status,
      observations,
      updated_by: userId
    },
      {
        where: {
          id: id_schedule
        }
      });

    res.json({
      data: schedule,
      message: "Agendamento atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_schedule } = req.params;

    Schedule.destroy({
      where: {
        id: id_schedule
      }
    })

    res.status(200).json({
      data: null,
      message: 'Agendamento foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
