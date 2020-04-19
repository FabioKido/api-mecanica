const Address = require('../../models/userEntities/Address');

module.exports = {

  async createAddress(req, res) {

    const { street, neighborhood, number, city, uf, complement } = req.body;

    const address = await Address.create({
      street,
      neighborhood,
      number,
      city,
      uf,
      complement,
    });

    return res.json(address);
  }
  
};
