const Automobile = require('../models/customerEntities/Automobile');

module.exports = {

  async createAutomobile(data) {

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

    const auto = await Automobile.findOne({
      where: {
        id_vehicle
      }
    });

    if(!auto)
      return;

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
        id: auto.id
      }
    });

    return automobile;
  }

};
