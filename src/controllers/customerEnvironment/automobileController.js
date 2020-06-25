const Automobile = require('../../models/customerEntities/Automobile');

module.exports = {

  async index(req, res) {
    const automobiles = await Automobile.findAll();
    res.status(200).json({
      data: automobiles
    });
  },

  async show(req, res) {
    const { id_vehicle } = req.params;

    const automobile = await Automobile.findOne({
      where: {
        id_vehicle
      }
    });

    return res.json(automobile);
  }

};
