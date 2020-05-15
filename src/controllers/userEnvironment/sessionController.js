const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');

const User = require('../../models/userEntities/User');
const Contact = require('../../models/userEntities/Contact');
const Address = require('../../models/userEntities/Address');

const { createContact } = require('../../services/contactService');
const { createAddress } = require('../../services/addressService');

const { roles } = require('../../roles');

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

exports.grantAccess = function(action, resource) {
  return async (req, res, next) => {
    try {
      const permission = roles.can(req.user.role)[action](resource);
      if (!permission.granted) {
        return res.status(401).json({
          error: "Vocẽ não tem permissão para acessar"
        });
      }
      next()
    } catch (error) {
      next(error)
    }
  }
}

exports.allowIfLoggedin = async (req, res, next) => {
  try {
    const user = res.locals.loggedInUser;
    if (!user)
      return res.status(401).json({
        error: "Você precisa estar logado para acessar essa página"
      });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

exports.signup = async (req, res, next) => {
  try {
    const {
      username,
      type,
      role,
      email,
      password,
      enable,
      accept_terms_privacy,
      id_access_plan
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

    const hashedPassword = await hashPassword(password);

    contact = await createContact({ celphone: '(00) 90000-0000' });

    address = await createAddress({ city: 'Cidade', uf: 'UF' });

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      type,
      role: role || "user_admin",
      enable: enable || false,
      accept_terms_privacy,
      id_access_plan: id_access_plan || null,
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

    if (!user) return next(new Error('Email não existe'));

    const validPassword = await validatePassword(password, user.password);

    if (!validPassword) return next(new Error('Senha incorreta'));

    const access_token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    await user.update({ access_token, last_login: Date() })

    res.status(200).json({
      data: { email: user.email, role: user.role, id: user.id, last_login: user.last_login },
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

    const id_user = req.user.id;

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
