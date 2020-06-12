const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const path = require('path');
const nodemailer = require("nodemailer");

const User = require('../../models/userEntities/User');
const Owner = require('../../models/userEntities/Owner');
const Company = require('../../models/userEntities/Company');

const { createContact } = require('../../services/contactService');
const { createAddress } = require('../../services/addressService');

// const { roles } = require('../../roles');

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

// Usar lib Crypto para gerar hash seguro
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// exports.grantAccess = function(action, resource) {
//   return async (req, res, next) => {
//     try {
//       const permission = roles.can(req.user.role)[action](resource);
//       if (!permission.granted) {
//         return res.status(401).json({
//           error: "Vocẽ não tem permissão para acessar"
//         });
//       }
//       next()
//     } catch (error) {
//       next(error)
//     }
//   }
// }

exports.signup = async (req, res, next) => {
  try {
    const {
      username,    
      email,
      password,
      company
    } = req.body

    let pj, pf;

    const user = await User.findOne({
      where: {
        email
      }
    });

    if(user){
      return res.json({
        message: "Usuário já cadastrado"
      })
    }

    const hashedPassword = await hashPassword(password);

    contact = await createContact({ celphone: '(00) 90000-0000', email });

    address = await createAddress({ city: 'Cidade', uf: 'UF' });

    const newUser = new User({
      username: username || email,
      email,
      password: hashedPassword,
      type: company ? 'PJ' : 'PF',
      role: "user_admin",
      enable:  true,
      accept_terms_privacy: true,
      id_access_plan: null,
      id_contact: contact.id || null,
      id_address: address.id || null,
      created_by: null,
      updated_by: null
    });

    const access_token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    newUser.access_token = access_token;

    await newUser.save();

    if(company){
      await Company.create({ name: newUser.username, type: 'MPE', id_user: newUser.id });
    }else {
      await Owner.create({ name: newUser.username, id_user: newUser.id });
    }

    newUser.password = "";

    res.json({
      data: newUser,
      message: "Você foi cadastrado com sucesso"
    })
  } catch (error) {
    next(error)
  }
}

exports.signin = async (req, res, next) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email
      }
    });

    if (!user) return next(new Error('Usuário não existe'));

    const validPassword = await validatePassword(password, user.password);

    if (!validPassword) return next(new Error('Senha incorreta'));

    const access_token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400,
    });
    
    await user.update({ access_token, last_login: Date() })

    user.password = undefined;

    res.status(200).json({
      user,
      access_token
    })

  } catch (error) {
      next(error);
  }
    
}

exports.signupWorker = async (req, res, next) => {
  try {
    const {
      username,
      email,
      password
    } = req.body

    const user = await User.findOne({
      where: {
        email
      }
    });

    if(user){
      return res.json({
        message: "Usuário já cadastrado"
      })
    }

    const id_user = req.user;

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      type: "user_basic",
      role: "user_basic",
      enable: true,
      accept_terms_privacy: true,
      created_by: id_user
    });

    const access_token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    newUser.access_token = access_token;

    await newUser.save();

    newUser.password = "";

    res.json({
      data: {newUser},
      message: "Colaborador cadastrado com sucesso"
    })
  } catch (error) {
    next(error)
  }
}

exports.forgot = async (req, res, next) => {

  try{
    const { email } = req.body

    const user = await User.findOne({
      where: {
        email
      }
    });

    if(!user) return next(new Error('Usuário não existe'));

    const password = 'T3MP'+getRandomNumber(0, 100)+'RAR1O';
    const hashedPassword = await hashPassword(password);

    await user.update({ password: hashedPassword });

    user.password = undefined;
    
    let transporter = nodemailer.createTransport({
      service:'gmail',
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    transporter.verify(function(error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    const subject = 'Recuperação de Senha - e-mecânica';
    const email_message = `
      Recuperação de Senha de cliente - e-mecânica

      Essa é sua senha de recuperação TEMPORÁRIA: ${password}

      Depois de entrar no App - e-mecânica - Crie uma nova senha e atualise suas informações!

      Att, e-mecânica.
    `;
  
    transporter.sendMail({
      from: "Fábio Kido <fabiohenryquemesquita@gmail.com>",
      to: email,
      subject: subject,
      text: email_message
    }).then(message => {
      console.log(message);
    }).catch(err => {
      console.log(err);
    });

    res.status(200).json({
      message: 'Email enviado com sucesso'
    });

    next()
  }catch (error) {
    next(error)
  }
}
