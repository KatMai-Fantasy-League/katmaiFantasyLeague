let db;

module.exports = (injectedDB) => {
    db = injectedDB;

    return {
        register,
        getUser,
        isValidUser,
    };
};

const bcrypt = require('bcrypt');
const saltRounds = 10;

function register(username, password, cbFunc) {
    const query = `INSERT INTO users (username, user_password) VALUES ('$1', '$2')`;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        const values = [username, hash]; 
        db.query(query, values, cbFunc);
    }); 
   
}

function getUser(username, password, cbFunc) {
    const getUserQuery = `SELECT * FROM users WHERE username = '$1' AND user_password = '$2'`;
    bcrypt.hash(password, saltRounds, function (err, hash) {
      const values = [username, hash];

      db.query(getUserQuery, values)
      .then((response) => {
          cbFunc(
              false,
              response.results && response.results.rowCount === 1
                  ? response.results.rows[0]
                  : null
          );
      });
    })  
}

function isValidUser(username, cbFunc) {
    const values = [username];
    const query = `SELECT * FROM users WHERE username = '$1'`;
    const checkUsrcbFunc = (response) => {
        const isValidUser = response.results
            ? !(response.results.rowCount > 0)
            : null;
        cbFunc(response.error, isValidUser);
    };
    db.query(query, values, checkUsrcbFunc);
}

