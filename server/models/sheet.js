let mongo = require('mongoose');

module.exports = new mongo.Schema({
  content:String, //JSOn string
  name: String,
  index: Number,
  created: Date,
  comments:String  
});

