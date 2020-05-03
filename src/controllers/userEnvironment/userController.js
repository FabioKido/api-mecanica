const User = require('../../models/userEntities/User');
const Contact = require('../../models/userEntities/Contact');
const Address = require('../../models/userEntities/Address');

exports.getUsers = async (req, res, next) => {

  const users = await User.findAll();

  res.status(200).json({
    data: users
  });

}

exports.getUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);
    if (!user) return next(new Error('Usuário não existe'));
    res.status(200).json({
      data: user
    });
  } catch (error) {
    next(error)
  }
}

exports.getUserInfo = async (req, res, next) => {
  try {
    const { id_user } = req.params;

    const infoAdd = await User.findByPk(id_user, {
      include: { association: 'address' }
    })

    const infoCont = await User.findByPk(id_user, {
      include: { association: 'contact' }
    })

    res.json({
      data: { infoCont.contact, infoAdd.address},
      message: "Informações de Endereço e Contato"
    });
  } catch (error) {
    next(error)
  }
}

exports.updateUser = async (req, res, next) => {

  try {

    const userId = req.params.userId;
    const {
      username,
      type,
      role,
      email,
      password,
      enable,
      accept_terms_privacy,
      id_access_plan,
      phone,
      celphone,
      email,
      street,
      neighborhood,
      number,
      city,
      uf,
      complement
    } = req.body

    const user = await User.update( {
      username,
      type,
      role,
      email,
      password,
      enable,
      updated_by: userId,
      accept_terms_privacy,
      id_access_plan
     },
     {
      where: {
        id: userId
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

    res.status(200).json({
      data: {user},
      message: 'Usuário foi atualizado'
    });

  } catch (error) {
    next(error)
  }
}

exports.deleteUser = async (req, res, next) => {

  try {

    const userId = req.params.userId;

    User.destroy({
      where: {
        id: userId
      }
    })

    res.status(200).json({
      data: null,
      message: 'Usuário foi deletado'
    });

  } catch (error) {
    next(error)
  }
}
