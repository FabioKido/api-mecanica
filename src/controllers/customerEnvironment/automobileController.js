const Automobile = require('../../models/customerEntities/Automobile');

module.exports = {

  async getAutomobiles(req, res) {
    const automobiles = await Automobile.findAll();
    res.status(200).json({
      data: automobiles
    });
  },

  async getAutomobile(req, res) {
    const { id_automobile } = req.params;

    const automobile = await Automobile.findByPk(id_automobile, {
      include: { association: 'vehicle' }
    })

    return res.json(automobile);
  },

  async addAutomobile(data) {

    const { id_vehicle, board, motor, fuel, car_exchange, direction, doors, chassis, renavam, ar } = data;

    const automobile = await Automobile.create({
      id_vehicle,
      board,
      motor,
      fuel,
      car_exchange,
      direction,
      doors,
      chassis,
      renavam,
      ar
    });

    return automobile;
  },

  async updateAutomobile(data) {

    const { id_vehicle, board, motor, fuel, car_exchange, direction, doors, chassis, renavam, ar } = data;

    const { id } = await Automobile.findOne({
      where: {
        id_vehicle
      }
    });

    const automobile = await Automobile.update( {
      board,
      motor,
      fuel,
      car_exchange,
      direction,
      doors,
      chassis,
      renavam,
      ar
     },
     {
      where: {
        id
      }
    });

    return automobile;
  }

};