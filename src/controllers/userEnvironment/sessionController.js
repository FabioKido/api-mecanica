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
      id_access_plan,
      phone,
      celphone,
      street,
      neighborhood,
      number,
      city,
      uf,
      complement
    } = req.body

    const hashedPassword = await hashPassword(password);

    if(celphone)
      contact = await createContact({ phone, celphone, email });

    if(city || uf)
      address = await createAddress({ street, neighborhood, number, city, uf, complement });

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      type,
      role: role || "user_basic",
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
      data: {newUser, contact, address},
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