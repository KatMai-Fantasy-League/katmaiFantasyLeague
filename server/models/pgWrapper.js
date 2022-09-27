const { Pool } = require("pg");

function query(queryString, cbFunc) {
  const pool = new Pool({
    user: "lherna05",
    host: "localhost",
    database: "katMaiOAuth",
    password: "n9x7Xx8XxJnRqIwQ",
    port: 5432,
  });
  pool.query(queryString, (error, results) => {
    cbFunc(setResponse(error, results));
  });
}
function setResponse(error, results) {
  return {
    error: error,
    results: results ? results : null,
  };
}
module.exports = {
  query,
};