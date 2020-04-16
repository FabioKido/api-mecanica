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

// Import of serviceEntities
const Diagnostic = require('../models/serviceEntities/Diagnostic');
const Order = require('../models/serviceEntities/Order');
const OrderProduct = require('../models/serviceEntities/OrderProduct');
const OrderService = require('../models/serviceEntities/OrderService');
const Payment = require('../models/serviceEntities/Payment');
const Preventive = require('../models/serviceEntities/Preventive');
const Schedule = require('../models/serviceEntities/Schedule');
const Service = require('../models/serviceEntities/Service');
const Checklist = require('../models/serviceEntities/Checklist');
const Record = require('../models/serviceEntities/Record');
const Timeline = require('../models/serviceEntities/Timeline');
const Parcel = require('../models/serviceEntities/Parcel');

// Import of financeEntities
const Account = require('../models/financeEntities/Account');
const Category = require('../models/financeEntities/Category');
const Expense = require('../models/financeEntities/Expense');
const ExpenseDetail = require('../models/financeEntities/ExpenseDetail');
const PaymentMethod = require('../models/financeEntities/PaymentMethod');
const Recipe = require('../models/financeEntities/Recipe');
const RecipeDetail = require('../models/financeEntities/RecipeDetail');
const Transfer = require('../models/financeEntities/Transfer');

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

// ServiceEntities
Diagnostic.init(connection);
Order.init(connection);
OrderProduct.init(connection);
OrderService.init(connection);
Payment.init(connection);
Preventive.init(connection);
Schedule.init(connection);
Service.init(connection);
Checklist.init(connection);
Record.init(connection);
Timeline.init(connection);
Parcel.init(connection);

Diagnostic.associate(connection.models);
Order.associate(connection.models);
OrderProduct.associate(connection.models);
OrderService.associate(connection.models);
Payment.associate(connection.models);
Preventive.associate(connection.models);
Schedule.associate(connection.models);
Service.associate(connection.models);
Parcel.associate(connection.models);

// FinanceEntities
Account.init(connection);
Category.init(connection);
Expense.init(connection);
ExpenseDetail.init(connection);
PaymentMethod.init(connection);
Recipe.init(connection);
RecipeDetail.init(connection);
Transfer.init(connection);

module.exports = connection;
