const Schedule = require('../../models/serviceEntities/Schedule');

module.exports = {

  async addSchedule(req, res) {

    const { date, status, enable, observations, id_vehicle } = req.body;

    const schedule = await Schedule.create({
      date,
      status,
      enable,
      observations,
      id_vehicle,
    });

    return res.json(schedule);
  },

  async getSchedules(req, res) {

    const schedules = await Schedule.findAll();

    res.status(200).json({
      data: schedules
    });

  }

};
