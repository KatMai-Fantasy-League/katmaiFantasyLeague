const express = require('express');
const loginControllers = require('../controllers/loginControllers');
const router = express.Router();

router.post('/login', loginControllers.createUser, loginControllers.verifyUser, loginControllers.createToken, (req, res) => {
    return res.status(200).redirect('/myBracket');  
});

module.exports = router; 