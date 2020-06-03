const express = require('express');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

require('./database');

require("dotenv").config({
  path: path.join(__dirname, "../.env")
});

const app = express();

const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log('Server is listening on Port:', PORT)
})
