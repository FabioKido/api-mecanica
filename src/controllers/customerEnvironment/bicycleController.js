const Bicycle = require('../../models/customerEntities/Bicycle');

module.exports = {

  async index(req, res) {
    const bicycles = await Bicycle.findAll();
    res.status(200).json({
      data: bicycles
    });
  },

  async show(req, res) {
    const { id_vehicle } = req.params;

    const bicycle = await Bicycle.findOne({
      where: {
        id_vehicle
      }
    });

    return res.json(bicycle);
  }

};
