let mongo = require('mongoose');

module.exports = new mongo.Schema({
  uuid: String,
  name:String,
  created: String,
  lastModified: Date,
  thumbnail: String,
  members:[
      {
          userID: String,
          profilePicUrl: String,
          name: String
      }
  ]
});
