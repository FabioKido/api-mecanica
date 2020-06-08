const bcrypt = require('bcrypt');

const User = require('../../models/userEntities/User');
const Contact = require('../../models/userEntities/Contact');
const Address = require('../../models/userEntities/Address');

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

exports.index = async (req, res, next) => {

  const users = await User.findAll();

  res.status(200).json({
    data: users
  });

}

exports.show = async (req, res, next) => {
  try {
    const id = req.user;
    
    const user = await User.findByPk(id);
    
    if (!user) return next(new Error('Usuário não existe'));

    user.password = "";

    res.status(200).json({
      data: user
    });
  } catch (error) {
    next(error)
  }
}

exports.update = async (req, res, next) => {

  try {

    const userId = req.params.userId;
    const {
      username,
      email,
      password,
      password_confirmation,
      phone,
      celphone,
      street,
      neighborhood,
      number,
      city,
      uf,
      complement
    } = req.body

    let user;
    const { id_contact, id_address } = await User.findByPk(userId);

    if(password){
      const hashedPassword = await hashPassword(password);

      user = await User.update( {
        username,
        email,
        password: hashedPassword,
        updated_by: userId,
       },
       {
        where: {
          id: userId
        }
      });
    }else {
      user = await User.update( {
        username,
        email,
        updated_by: userId,
       },
       {
        where: {
          id: userId
        }
      });
    }
    
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

exports.destroy = async (req, res, next) => {

  try {

    const userId = req.params.userId;
    const { id_contact, id_address } = await User.findByPk(userId);

    if(id_contact)
      Contact.destroy({ where: { id: id_contact } });

    if(id_address)
      Address.destroy({ where: { id: id_address } });

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
