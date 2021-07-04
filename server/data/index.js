const express = require('express');
const Authenticated = require('../auth');
const router = express.Router();


router.get('/create-user', Authenticated, (req, res, next)=>{
  
});
router.get('/load-dashboard', Authenticated, (req, res, next)=>{
  
});

router.get('/create/sheet', Authenticated, (req, res, next)=>{
  
});

router.get('/create/space', Authenticated, (req, res, next)=>{
  
});

router.get('/delete/sheet', Authenticated, (req, res, next)=>{
  
});
router.get('/delete/space', Authenticated, (req, res, next)=>{
  
});
module.exports = router;