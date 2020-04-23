const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('./models/userEntities/User');
const routes = require('./routes');
require('./database');
require("dotenv").config({
  path: path.join(__dirname, "../.env")
});

const app = express();

const PORT = process.env.PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  if (req.headers["x-access-token"]) {
    try {
      const access_token = req.headers["x-access-token"];
      const { userId, exp } = await jwt.verify(access_token, process.env.JWT_SECRET);
      // If token has expired
      if (exp < Date.now().valueOf() / 1000) {
        return res.status(401).json({
          error: "JWT token has expired, please login to obtain a new one"
        });
      }
      res.locals.loggedInUser = await User.findByPk(userId);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log('Server is listening on Port:', PORT)
})
