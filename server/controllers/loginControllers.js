const db = require('../models/models')
const jwt = require('jsonwebtoken')

const loginControllers = {}; 


loginControllers.createUser = (req, res, next) => {
    try{
      console.log('ENTERED CREATE USER IN LOGIN CONTROLLERS');  
      next();
    } catch {
      return next({
        log: 'Error in createUser',
        message: {err: 'Error occured in createUser'},
    });
  }
}

loginControllers.updateUser = (req, res, next) => {
    try{
      console.log('ENTERED UPDATE USER IN LOGIN CONTROLLERS');
      next();
    } catch {
      return next({
        log: 'Error in updateUser',
        message: {err: 'Error occured in updateUser'},
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

loginControllers.forgotPassword = (req, res, next) => {
    try{
      console.log('ENTERED FORGOT PASSWORD IN LOGIN CONTROLLERS');
      next();
    } catch {
      return next({
        log: 'Error in forgotPassword',
        message: {err: 'Error occured in forgotPassword'},
    });
  }
}

module.exports = loginControllers;