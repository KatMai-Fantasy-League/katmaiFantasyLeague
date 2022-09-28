const db = require('../models/models.js');

const bearController = {};

bearController.getBears = (req, res, next) => {
  console.log('in bearController.getBears');

  const query = `SELECT * FROM bears ORDER BY id`;

  db.query(query)
    .then((result) => {
      res.locals.bears = result.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: {
          err: 'error in bearController.getBears - issue getting bears',
        },
      });
    });
};

bearController.getMyBracket = (req, res, next) => {
  console.log('in bearController.getMyBracket');

  const query = `SELECT * FROM userbrackets WHERE user_id = $1 ORDER BY rd`;

  db.query(query, [1])
    .then((result) => {
      res.locals.myBracket = result.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: {
          err: 'error in bearController.getMyBracket - issue getting myBracket',
        },
      });
    });
};

bearController.getResultsBracket = (req, res, next) => {
  console.log('in bearController.getResultsBracket');

  const query = `SELECT * FROM resultsbrackets ORDER BY rd`;

  db.query(query)
    .then((result) => {
      res.locals.resultsBracket = result.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: {
          err: 'error in bearController.getResultsBracket - issue getting ResultsBracket',
        },
      });
    });
};

module.exports = bearController;
