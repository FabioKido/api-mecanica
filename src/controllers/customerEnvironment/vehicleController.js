const Vehicle = require('../../models/customerEntities/Vehicle');
const Customer = require('../../models/customerEntities/Customer');

const { addAutomobile } = require('./automobileController');
const { addBicycle } = require('./bicycleController');

module.exports = {

  async getVehicles(req, res) {
    const vehicles = await Vehicle.findAll();
    res.status(200).json({
      data: vehicles
    });
  },

  async addVehicle(req, res) {

    const { id_customer } = req.params;
    const {
      fabricator,
      model,
      year_fab,
      year_model,
      color,
      observations,
      board,
      motor,
      fuel,
      car_exchange,
      direction,
      doors,
      chassis,
      renavam,
      ar,
      hand_brake
    } = req.body;

    const customer = await Customer.findByPk(id_customer);

    if (!customer) {
      return res.status(400).json({ error: 'Cliente não encontrado' });
    }

    const vehicle = await Vehicle.create({
      id_customer,
      fabricator,
      model,
      year_fab,
      year_model,
      color,
      observations,
      enable: true,
      created_by: null,
      updated_by: null
    });

    if(board || motor || fuel || car_exchange || direction || doors || chassis || renavam || ar)
      await addAutomobile({ id_vehicle: vehicle.id, board, motor, fuel, car_exchange, direction, doors, chassis, renavam, ar });

    if(hand_brake)
      await addBicycle({ id_vehicle: vehicle.id, hand_brake });

    res.json({
      data: {vehicle},
      message: "Veículo cadastrado com sucesso"
    });
  }
};
