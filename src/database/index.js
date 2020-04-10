const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

// Import of userEntities
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

// Import of customerEntities
const Customer = require('../models/customerEntities/Customer');
const Vehicle = require('../models/customerEntities/Vehicle');
const Automobile = require('../models/customerEntities/Automobile');
const Bicycle = require('../models/customerEntities/Bicycle');

// Import of stockEntities
const Family = require('../models/stockEntities/Family');
const Product = require('../models/stockEntities/Product');
const Provider = require('../models/stockEntities/Provider');
const Acquisition = require('../models/stockEntities/Acquisition');
const ProductAcquisition = require('../models/stockEntities/ProductAcquisition');

const connection = new Sequelize(dbConfig);

// UserEntities
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

// CustomerEntities
Customer.init(connection);
Vehicle.init(connection);
Automobile.init(connection);
Bicycle.init(connection);

Customer.associate(connection.models);
Vehicle.associate(connection.models);
Automobile.associate(connection.models);
Bicycle.associate(connection.models);

// StockEntities
Family.init(connection);
Product.init(connection);
Provider.init(connection);
Acquisition.init(connection);
ProductAcquisition.init(connection);

Family.associate(connection.models);
Product.associate(connection.models);
Provider.associate(connection.models);
Acquisition.associate(connection.models);
ProductAcquisition.associate(connection.models);

module.exports = connection;
