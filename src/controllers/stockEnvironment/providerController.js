const Provider = require('../../models/stockEntities/Provider');
const Contact = require('../../models/userEntities/Contact');
const Address = require('../../models/userEntities/Address');

const { addContact, updateContact } = require('../../controllers/userEnvironment/contactController');
const { createAddress, updateAddress } = require('../../controllers/userEnvironment/addressController');

exports.getProviders = async (req, res, next) => {
  const providers = await Provider.findAll();
  res.status(200).json({
    data: providers
  });
}

exports.getProvider = async (req, res, next) => {
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

exports.addProvider = async (req, res, next) => {
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
      contact = await addContact({ phone, celphone, email });

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
      created_by: null,
      updated_by: null,
    });

    res.json({
      data: provider,
      message: "Fornecedor cadastrado com sucesso"
    })

  } catch (error) {
    next(error)
  }
}

exports.updateProvider = async (req, res, next) => {
  try {

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
      active
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

exports.deleteProvider = async (req, res, next) => {
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
