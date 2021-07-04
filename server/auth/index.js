const { Router } = require('express');
const passport = require('passport');
const passportFacebook = require('passport-facebook');
const passportGoogle = require('passport-google-oauth');

let router = Router();

// passport.use(new passportFacebook({
    
// }));

// passport.use(new passportGoogle.OAuth2Strategy({
    
// }));

router.use(passport.initialize());
router.use(passport.session());

let knownProviders = [
  'google', 'facebook'
]

router.get('/login/:provider',(req, res, next)=>{

});

router.get('/logout/:provider',(req, res, next)=>{

});

module.exports = router;