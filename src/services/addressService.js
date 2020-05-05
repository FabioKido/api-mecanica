const Address = require('../models/userEntities/Address');

module.exports = {

  async createAddress(data) {

    const { street, neighborhood, number, city, uf, complement } = data;

    const address = await Address.create({
      street,
      neighborhood,
      number,
      city,
      uf,
      complement,
    });

    return address;
  }

};
