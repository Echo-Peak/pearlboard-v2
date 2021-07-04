let mongo = require('mongoose');

module.exports = new mongo.Schema({
    appleCount: Number,
    name: String,
    body: String
}, {collection:"zoomers"});

