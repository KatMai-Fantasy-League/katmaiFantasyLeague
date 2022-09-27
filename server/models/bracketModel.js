const { Pool } = require('pg');

const PG_URI = 'postgres://jrihrzgw:Fnv_FzDvnmRDNnfRbfQsH4T5sSJGhHNn@heffalump.db.elephantsql.com/jrihrzgw';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}
