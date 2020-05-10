const mysql = require('mysql2');

const pool = mysql.createPool({
host:"localhost",
user:"root",
password:"",
database:"node_bais"
});

module.exports = pool.promise();