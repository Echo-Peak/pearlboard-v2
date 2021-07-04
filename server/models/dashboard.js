let mongo = require('mongoose');
//let user = require('./user');

module.exports = new mongo.Schema({
  userID: String,
  spaces: [
    {
      userID: String,
      title:String,
      numOfSheets: Number,
      created: Date,
      lastModified: Date,
      members:{
        name:String,
        userID: String
      }
    }
  ]
});

