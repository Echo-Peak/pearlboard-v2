const express = require('express');
const Authenticated = require('../auth');
const router = express.Router();


router.get('/test', Authenticated, (req, res, next)=>{
  
});

module.exports = router;