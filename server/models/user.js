let mongo = require('mongoose');

module.exports = new mongo.Schema({
  uuid: String,
  profilePicUrl:String,
  name: String,
  email: String,
  created: Number,
  provider: String

});

