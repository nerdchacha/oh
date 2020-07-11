const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const { connect } = require('./dal');
const routes = require('./routes');

const app = express();
app.use(cors())


async function start() {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json());

  app.use('/api', routes);
  // await connect();
  app.listen('5454', () => {
    console.log('Server is listening o port 5454');
  });
}

start();


