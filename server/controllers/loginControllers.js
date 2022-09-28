const db = require('../models/bracketModel')
const jwt = require('jsonwebtoken')



const loginControllers = {}; 


loginControllers.createUser =  (req, res, next) => {
    try{
      console.log('ENTERED CREATE USER IN LOGIN CONTROLLERS'); 
      const { username } = req.body.username; 

      //check is User exists already
      const values = [username]; 
      const checkForUserQuery = `SELECT * FROM users WHERE username=('$1') RETURNING *`;
   
      db.query(checkForUserQuery, values)
        .then( (response) => { 
            if (response) { 
                console.log("response from checkForUserQuery is: ", response); 
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
        log: 'Error in createUser',
        message: {err: 'Error occured in createUser'},
    });
  }
}


loginControllers.createToken = (req, res, next) => {
    try{
      console.log('ENTERED CREATE TOKEN');


      next();
    } catch {
      return next({
        log: 'Error in createToken',
        message: {err: 'Error occured in createToken'},
    });
    }
}

loginControllers.verifyToken = (req, res, next) => {
    try { 
      console.log('ENTERED VERIFY TOKEN');
      next(); 
    } catch {
      return next({
        log: 'Error in verifyToken',
        message: {err: 'Error occured in verifyToken'},
    });
  }
}

loginControllers.checkForToken = (req, res, next) => {
    try{
      console.log('ENTERED CHECK FOR TOKEN IN LOGIN CONTROLLERS');
      next();
    } catch {
      return next({
        log: 'Error in checkForToken',
        message: {err: 'Error occured in checkForToken'},
    });
  }
}

loginControllers.verifyUser = (req, res, next) => {
    try {
      console.log('ENTERED VERIFY USER IN LOGIN CONTROLLERS');
      next();
    } catch {
      return next({
        log: 'Error in verifyUser',
        message: {err: 'Error occured in verifyUser'},
    });
    }
}



module.exports = loginControllers;

