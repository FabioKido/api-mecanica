const Schedule = require('../../models/serviceEntities/Schedule');

exports.getSchedules = async (req, res) => {
  const schedules = await Schedule.findAll();

  res.status(200).json({
    data: schedules
  });
}

exports.getSchedule = async (req, res, next) => {
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

exports.addSchedule = async (req, res, next) => {
  try {
    const { date, status, enable, observations, id_vehicle } = req.body;

    const schedule = await Schedule.create({
      id_vehicle,
      date,
      status,
      observations,
      enable: true,
      created_by: null,
      updated_by: null
    });

    res.json({
      data: schedule,
      message: "Agendamento cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}


exports.updateSchedule = async (req, res, next) => {
  try {

    const { id_schedule } = req.params;
    const {
      date,
      status,
      observations
    } = req.body;

    const schedule = await Schedule.update( {
      date,
      status,
      observations
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

exports.deleteSchedule = async (req, res, next) => {
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
