const db = require('../models/bracketModel')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const loginControllers = {}; 

loginControllers.confirmGoogleToken = (req, res, next) => {
    console.log('in loginControllers.confirmGoogleToken')
    try { 
      console.log('ENTERED confirmGoogleToken');
      console.log('object received in confirmGoogleToken is: ', req.body)
      
      //first confirm received token has the current issuer and client ID 
      const iss = req.body.iss; 
      const aud = req.body.aud; 
      const username = req.body.email

      console.log("process.env.GOOG_ISS: ", process.env.GOOG_ISS);
      console.log("process.env.GOOG_ISS: ", process.env.GOOG_AUD);
      console.log('check1',iss === process.env.GOOG_ISS)
      console.log('check2',aud === process.env.GOOG_AUD)

      if (iss === process.env.GOOG_ISS && aud === process.env.GOOG_AUD) {
        console.log('in the if')
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

  console.log('in loginControllers.verifyUser')
    
  try{
      console.log('ENTERED verify USER IN LOGIN CONTROLLERS'); 
      
      const { username } = res.locals; 

      //check is User exists already
      const values = [username];
      console.log('values', values) 
      const checkForUserQuery = `SELECT * FROM users WHERE username=$1`;
   
      db.query(checkForUserQuery, values)
        .then( (response) => { 
            if (response.rows.length === 0) { 
                console.log("response from checkForUserQuery is: ", response);
                
                // check if response.rows.length === 0;  
                const createNewUserQuery = `INSERT INTO users (username) VALUES ($1)`;
                
                db.query(createNewUserQuery, values)
                  .then( (response) => {
                    console.log('response from query is: ', response); 
                    return next(); 
                  });  
                  
                //need to save userID to res.locals to be used when creating cookie
                // res.locals.userID = response.

                return next()
            } else {
              return next(); 
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

  console.log('in loginControllers.createToken')
    try { 
      
        const { userID } = res.locals; 
        
        jwt.sign({userID}, process.env.JWT_SECRET, { expiresIn: '8h'}, (err, token) => {
          res.locals.myToken = {token};
          console.log('TOKEN IS ', token);
          //make sure the cookie has the userID for future HTTP/API requests 
          res.cookie('authorization', token, { HttpOnly: true});
          return next();
        });
    } catch {
      return next({
        log: 'Error in verifyToken',
        message: {err: 'Error occured in verifyToken'},
    });
  }
}



module.exports = loginControllers;

