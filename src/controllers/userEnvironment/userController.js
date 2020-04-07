const User = require('../../models/userEntities/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');

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
    const { username, type, role, email, password, enable, accept_terms_privacy, id_access_plan } = req.body
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ username, email, password: hashedPassword, type, role: role || "user_basic", enable: enable || false, accept_terms_privacy, id_access_plan });
    const access_token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });
    newUser.access_token = access_token;
    await newUser.save();
    res.json({
      data: newUser,
      message: "Você foi cadastrado com sucesso"
    })
  } catch (error) {
    next(error)
  }
}

exports.login = async (req, res, next) => {

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

exports.updateUser = async (req, res, next) => {

  try {

    const userId = req.params.userId;
    const { username, type, role, email, password, enable, accept_terms_privacy, id_access_plan } = req.body

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
