const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/userEntities/User');
const Owner = require('../models/userEntities/Owner');
const Worker = require('../models/userEntities/Worker');
const Company = require('../models/userEntities/Company');
const AccessPlan = require('../models/userEntities/AccessPlan');
const Resource = require('../models/userEntities/Resource');
const Contact = require('../models/userEntities/Contact');
const Group = require('../models/userEntities/Group');
const Permission = require('../models/userEntities/Permission');
const Address = require('../models/userEntities/Address');

const Customer = require('../models/customerEntities/Customer');
const Vehicle = require('../models/customerEntities/Vehicle');
const Automobile = require('../models/customerEntities/Automobile');
const Bicycle = require('../models/customerEntities/Bicycle');

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
Address.init(connection);

User.associate(connection.models);
Owner.associate(connection.models);
Worker.associate(connection.models);
Company.associate(connection.models);
AccessPlan.associate(connection.models);
Resource.associate(connection.models);
//Contact.associate(connection.models);
Group.associate(connection.models);
Permission.associate(connection.models);
//Address.associate(connection.models);

Customer.init(connection);
Vehicle.init(connection);
Automobile.init(connection);
Bicycle.init(connection);

Customer.associate(connection.models);
Vehicle.associate(connection.models);
Automobile.associate(connection.models);
Bicycle.associate(connection.models);

module.exports = connection;
