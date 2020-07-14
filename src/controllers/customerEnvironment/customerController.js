const Customer = require('../../models/customerEntities/Customer');
const Contact = require('../../models/userEntities/Contact');
const Address = require('../../models/userEntities/Address');

const { createContact } = require('../../services/contactService');
const { createAddress } = require('../../services/addressService');

async function createContactAddress() {

  const contact = await createContact({ celphone: '(00) 90000-0000' });
  const address = await createAddress({ city: 'Cidade', uf: 'UF' });

  return { contact, address }
}

exports.index = async (req, res, next) => {
  try {
    const id_user = req.user;

    const customers = await Customer.findAll({
      where: {
        created_by: id_user
      }
    });

    res.status(200).json({
      customers
    });
  } catch (error) {
    next(error)
  }
}

exports.show = async (req, res, next) => {
  try {
    const { id_customer } = req.params;
    const customer = await Customer.findByPk(id_customer);
    if (!customer) return next(new Error('Cliente não existe'));
    res.status(200).json({
      customer
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  try {
    const userId = req.user;
    const {
      name,
      sex,
      cpf,
      rg,
      cnpj,
      ie,
      birthday,
      observations
    } = req.body;

    const { contact, address } = await createContactAddress();

    const newCustomer = await Customer.create({
      name,
      sex,
      cpf,
      rg,
      cnpj,
      ie,
      birthday: birthday || null,
      observations,
      status: 0,
      inadimplente: false,
      active: true,
      id_contact: contact.id,
      id_address: address.id,
      created_by: userId
    });

    res.json({
      data: { newCustomer },
      message: "Cliente cadastrado com sucesso"
    });
  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {

  try {
    const userId = req.user;
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
      active,
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

    const { id_contact, id_address } = await Customer.findByPk(id_customer);

    const customer = await Customer.update({
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
      active,
      updated_by: userId
    },
      {
        where: {
          id: id_customer
        }
      });

    await Contact.update({
      phone,
      celphone,
      email
    },
      {
        where: {
          id: id_contact
        }
      });

    await Address.update({
      street,
      neighborhood,
      number,
      city,
      uf,
      complement
    },
      {
        where: {
          id: id_address
        }
      });

    res.status(200).json({
      data: { customer },
      message: 'Cliente foi atualizado'
    });

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {
    const { id_customer } = req.params;
    const { id_contact, id_address } = await Customer.findByPk(id_customer);

    if (id_contact)
      Contact.destroy({ where: { id: id_contact } });

    if (id_address)
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
