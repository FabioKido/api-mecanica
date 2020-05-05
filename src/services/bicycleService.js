const Bicycle = require('../models/customerEntities/Bicycle');

module.exports = {

  async createBicycle(data) {

    const { id_vehicle, hand_brake } = data;

    const bicycle = await Bicycle.create({
      id_vehicle,
      hand_brake
    });

    return bicycle;
  },

  async updateBicycle(data) {

    const { id_vehicle, hand_brake } = data;

    const bike = await Bicycle.findOne({
      where: {
        id_vehicle
      }
    });

    if(!bike)
      return;

    const bicycle = await Bicycle.update( {
      hand_brake
     },
     {
      where: {
        id: bike.id
      }
    });

    return bicycle;
  }

};
