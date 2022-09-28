const express = require('express');
const loginControllers = require('../controllers/loginControllers');
const router = express.Router();

router.post('/', 
  loginControllers.confirmGoogleToken, 
  loginControllers.verifyUser,
  loginControllers.createToken, 
   (req, res) => {
  res.redirect('/home');  
});

module.exports = router; 