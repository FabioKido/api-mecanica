const Customer = require('../../models/customerEntities/Customer');
const { addContact } = require('../../controllers/userEnvironment/contactController');
const { createAddress } = require('../../controllers/userEnvironment/addressController');

exports.getGroups = async (req, res, next) => {
  const groups = await Group.findAll();
  res.status(200).json({
    data: groups
  });
}

exports.getGroup = async (req, res, next) => {
  try {
    const groupId = req.params.groupId;
    const group = await Group.findByPk(groupId);
    if (!group) return next(new Error('Grupo não existe'));
    res.status(200).json({
      data: group
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

exports.deleteGroup = async (req, res, next) => {
  try {
    const { groupId } = req.params;

    Group.destroy({
      where: {
        id: groupId
      }
    })

    res.status(200).json({
      data: null,
      message: "Grupo deletado com sucesso"
    });
  } catch (error) {
    next(error)
  }
}
