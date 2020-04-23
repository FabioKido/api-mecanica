const Bicycle = require('../../models/customerEntities/Bicycle');

module.exports = {

  async addBicycle(data) {

    const { hand_brake } = data;

    const bicycle = await Bicycle.create({
      hand_brake
    });

    return bicycle;
  }

};
