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

router.get('/login/facebook',()=>{

});
router.get('/login/google',()=>{

});

router.get('/logout',()=>{

});
module.exports = router;