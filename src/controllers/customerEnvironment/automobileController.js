const Automobile = require('../../models/customerEntities/Automobile');

module.exports = {

  async addAutomobile(data) {

    const { board, motor, fuel, car_exchange, direction, doors, chassis, renavam, ar } = data;

    const automobile = await Automobile.create({
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
  }

};
