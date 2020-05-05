const Vehicle = require('../../models/customerEntities/Vehicle');
const Customer = require('../../models/customerEntities/Customer');

const { createAutomobile, updateAutomobile} = require('../../services/contactService');
const { createBicycle, updateBicycle } = require('../../services/addressService');

module.exports = {

  async index(req, res) {
    const vehicles = await Vehicle.findAll();
    res.status(200).json({
      data: vehicles
    });
  },

  async store(req, res) {

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

    if(fuel){
      await createAutomobile({ id_vehicle: vehicle.id, board, motor, fuel, car_exchange, direction, doors, chassis, renavam, ar });
    }else{
      await createBicycle({ id_vehicle: vehicle.id, hand_brake });
    }

    res.json({
      data: {vehicle},
      message: "Veículo cadastrado com sucesso"
    });
  },

  async update(req, res) {

    const { id_vehicle } = req.params;
    const {
      fabricator,
      model,
      year_fab,
      year_model,
      color,
      observations,
      enable,
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

    const vehicle = await Vehicle.update( {
      fabricator,
      model,
      year_fab,
      year_model,
      color,
      observations,
      enable
     },
     {
      where: {
        id: id_vehicle
      }
    });

    await updateAutomobile({ id_vehicle, board, motor, fuel, car_exchange, direction, doors, chassis, renavam, ar });

    await updateBicycle({ id_vehicle, hand_brake });

    res.status(200).json({
      data: {vehicle},
      message: 'Veículo foi atualizado'
    });
  },

  async destroy(req, res) {
    const { id_vehicle } = req.params;

    Vehicle.destroy({
      where: {
        id: id_vehicle
      }
    })

    res.status(200).json({
      data: null,
      message: "Veículo deletado com sucesso"
    });
  }
};
