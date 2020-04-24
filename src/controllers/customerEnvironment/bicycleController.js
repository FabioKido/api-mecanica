const Bicycle = require('../../models/customerEntities/Bicycle');

module.exports = {

  async getBicycles(req, res) {
    const bicycles = await Bicycle.findAll();
    res.status(200).json({
      data: bicycles
    });
  },

  async getBicycle(req, res) {
    const { id_bicycle } = req.params;

    const bicycle = await Bicycle.findByPk(id_bicycle, {
      include: { association: 'vehicle' }
    })

    return res.json(bicycle);
  },

  async addBicycle(data) {

    const { id_vehicle, hand_brake } = data;

    const bicycle = await Bicycle.create({
      id_vehicle,
      hand_brake
    });

    return bicycle;
  },

  async updateBicycle(data) {

    const { id_vehicle, hand_brake } = data;

    const { id } = await Bicycle.findOne({
      where: {
        id_vehicle
      }
    });

    const bicycle = await Bicycle.update( {
      hand_brake
     },
     {
      where: {
        id
      }
    });

    return bicycle;
  }

};
