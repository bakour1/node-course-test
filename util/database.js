// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: 'sami1993H@',
});

// exports as promise
module.exports = pool.promise();