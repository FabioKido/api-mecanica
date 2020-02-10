const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Owner = require('../models/Owner');
const Worker = require('../models/Worker');
const Company = require('../models/Company');

const connection = new Sequelize(dbConfig);

User.init(connection);
Owner.init(connection);
Worker.init(connection);
Company.init(connection);

Worker.associate(connection.models);

module.exports = connection;