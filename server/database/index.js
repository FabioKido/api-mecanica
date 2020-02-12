const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Owner = require('../models/Owner');
const Worker = require('../models/Worker');
const Company = require('../models/Company');
const AccessPlan = require('../models/AccessPlan');
const Resource = require('../models/Resource');
const Contact = require('../models/Contact');
const Group = require('../models/Group');
const Permission = require('../models/Permission');

const connection = new Sequelize(dbConfig);

User.init(connection);
Owner.init(connection);
Worker.init(connection);
Company.init(connection);
AccessPlan.init(connection);
Resource.init(connection);
Contact.init(connection);
Group.init(connection);
Permission.init(connection);

User.associate(connection.models);
Owner.associate(connection.models);
Worker.associate(connection.models);
Company.associate(connection.models);
AccessPlan.associate(connection.models);
Resource.associate(connection.models);
//Contact.associate(connection.models);
Group.associate(connection.models);
Permission.associate(connection.models);

module.exports = connection;