const Customer = require('../../models/customerEntities/Customer');
const Contact = require('../../models/userEntities/Contact');
const Address = require('../../models/userEntities/Address');

const { addContact } = require('../../controllers/userEnvironment/contactController');
const { createAddress } = require('../../controllers/userEnvironment/addressController');

exports.getCustomers = async (req, res, next) => {
  const customers = await Customer.findAll();
  res.status(200).json({
    data: customers
  });
}

exports.getCustomer = async (req, res, next) => {
  try {
    const { id_customer } = req.params;
    const customer = await Customer.findByPk(id_customer);
    if (!customer) return next(new Error('Cliente não existe'));
    res.status(200).json({
      data: customer
    });
  } catch (error) {
    next(error)
  }
}

exports.addCustomer = async (req, res, next) => {
  try {
    const {
      name,
      sex,
      cpf,
      rg,
      cnpj,
      ie,
      birthday,
      observations,
      status,
      inadimplente,
      phone,
      celphone,
      email,
      street,
      neighborhood,
      number,
      city,
      uf,
      complement
    } = req.body;

    if(phone || celphone || email)
      contact = await addContact({ phone, celphone, email });

    if(street || neighborhood || number || city || uf || complement)
      address = await createAddress({ street, neighborhood, number, city, uf, complement });

    const newCustomer = await Customer.create({
      id_contact: contact.id,
      id_address: address.id,
      name,
      sex,
      cpf,
      rg,
      cnpj,
      ie,
      birthday,
      observations,
      status,
      inadimplente,
      active: true,
      created_by: null,
      updated_by: null
    });

    res.json({
      data: {newCustomer, contact, address},
      message: "Customer cadastrado com sucesso"
    });
  } catch (error) {
    next(error)
  }
}

exports.updateCustomer = async (req, res, next) => {

  try {

    const { id_customer } = req.params;
    const {
      name,
      sex,
      cpf,
      rg,
      cnpj,
      ie,
      birthday,
      observations,
      status,
      inadimplente,
      active
    } = req.body;

    const customer = await Customer.update( {
      name,
      sex,
      cpf,
      rg,
      cnpj,
      ie,
      birthday,
      observations,
      status,
      inadimplente,
      active
     },
     {
      where: {
        id: id_customer
      }
    });

    res.status(200).json({
      data: {customer},
      message: 'Cliente foi atualizado'
    });

  } catch (error) {
    next(error)
  }
}

exports.deleteCustomer = async (req, res, next) => {
  try {
    const { id_customer } = req.params;
    const { id_contact, id_address } = await Customer.findByPk(id_customer);

    if(id_contact)
      Contact.destroy({ where: { id: id_contact } });

    if(id_address)
      Address.destroy({ where: { id: id_address } });

    Customer.destroy({
      where: {
        id: id_customer
      }
    })

    res.status(200).json({
      data: null,
      message: "Cliente deletado com sucesso"
    });
  } catch (error) {
    next(error)
  }
}
