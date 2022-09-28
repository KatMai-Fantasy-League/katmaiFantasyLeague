const db = require('../models/bracketModel')
const jwt = require('jsonwebtoken')

const loginControllers = {}; 

loginControllers.confirmGoogleToken = (req, res, next) => {
    try { 
      console.log('ENTERED confirmGoogleToken');
      console.log('object received in confirmGoogleToken is: ', req,body)
      
      //first confirm received token has the current issuer and client ID 
      const iss = req.body.iss; 
      const aud = req.body.aud; 
      const username = req.body.email

      if (iss === process.env.GOOG_ISS && aud === GOOG_AUD) {
        res.locals.username = username; 
        return next(); 
      } else {
        next({
            log: 'Error during login: unauthorized user', 
            message: {err: 'Error occuered in confirmGoogleToken'}
        })
      }
    } catch {
      return next({
        log: 'Error in confirmGoogleToken',
        message: {err: 'Error occured in confirmGoogleToken'},
    });
  }
}; 


loginControllers.verifyUser =  (req, res, next) => {
    try{
      console.log('ENTERED verify USER IN LOGIN CONTROLLERS'); 
      
      const { username } = res.locals;

      //check is User exists already
      const values = [username]; 
      const checkForUserQuery = `SELECT * FROM users WHERE username=('$1') RETURNING *`;
   
      db.query(checkForUserQuery, values)
        .then( (response) => { 
            if (response) { 
                console.log("response from checkForUserQuery is: ", response); 
                //need to save userID to res.locals to be used when creating cookie
                // res.locals.userID = response.
                return next()
            } else {
                const createNewUserQuery = `INSERT INTO users (username) VALUES ('$1') RETURNING * `;
                db.query(query, values)
                  .then( (response) => next());
            }
      });
    } catch {
      return next({
        log: 'Error in verifyUser',
        message: {err: 'Error occured in verifyUser'},
    });
  }
}



loginControllers.createToken = (req, res, next) => {
    try { 
      
        const { userID } = res.locals; 
        
        jwt.sign({userID}, process.env.JWT_SECRET, { expiresIn: '8h'}, (err, token) => {
          res.locals.myToken = {token};
          console.log('TOKEN IS ', token);
          //make sure the cookie has the userID for future HTTP/API requests 
          res.cookie('authorization', token, { HttpOnly: true});
          next();
        });
    } catch {
      return next({
        log: 'Error in verifyToken',
        message: {err: 'Error occured in verifyToken'},
    });
  }
}



module.exports = loginControllers;

