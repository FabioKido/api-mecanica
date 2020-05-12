const Provider = require('../../models/stockEntities/Provider');
const Contact = require('../../models/userEntities/Contact');
const Address = require('../../models/userEntities/Address');

const { createContact } = require('../../services/contactService');
const { createAddress } = require('../../services/addressService');

exports.index = async (req, res, next) => {
  const providers = await Provider.findAll();
  res.status(200).json({
    data: providers
  });
}

exports.show = async (req, res, next) => {
  try {
    const { id_provider } = req.params;
    const provider = await Provider.findByPk(id_provider);
    if (!provider) return next(new Error('Fornecedor não existe'));
    res.status(200).json({
      data: provider
    });
  } catch (error) {
    next(error)
  }
}

exports.store = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const {
      name,
      cnpj,
      ie,
      observations,
      product_provider,
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

    if(celphone)
      contact = await createContact({ phone, celphone, email });

    if(city || uf)
      address = await createAddress({ street, neighborhood, number, city, uf, complement });

    const provider = await Provider.create({
      id_contact: contact.id,
      id_address: address.id,
      name,
      cnpj,
      ie,
      observations,
      product_provider,
      active: true,
      created_by: userId
    });

    res.json({
      data: provider,
      message: "Fornecedor cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { id_provider } = req.params;
    const {
      name,
      cnpj,
      ie,
      observations,
      product_provider,
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

    const { id_contact, id_address } = await Provider.findByPk(id_provider);

    const provider = await Provider.update( {
      name,
      cnpj,
      ie,
      observations,
      product_provider,
      active,
      updated_by: userId
     },
     {
      where: {
        id: id_provider
      }
    });

    await Contact.update( {
      phone,
      celphone,
      email
     },
     {
      where: {
        id: id_contact
      }
    });

    await Address.update( {
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

    res.json({
      data: provider,
      message: "Fornecedor atualizado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.destroy = async (req, res, next) => {
  try {

    const { id_provider } = req.params;
    const { id_contact, id_address } = await Provider.findByPk(id_provider);

    if(id_contact)
      Contact.destroy({ where: { id: id_contact } });

    if(id_address)
      Address.destroy({ where: { id: id_address } });

    Provider.destroy({
      where: {
        id: id_provider
      }
    })

    res.status(200).json({
      data: null,
      message: 'Fornecedor foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
