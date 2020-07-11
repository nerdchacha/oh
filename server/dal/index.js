const mongoose = require('mongoose');

const connect = async () => (
  mongoose.connect('mongodb://localhost:27017/oh', { useNewUrlParser: true, useUnifiedTopology: true }).catch((e) => console.log(e))
);

module.exports = {
  connect
};
