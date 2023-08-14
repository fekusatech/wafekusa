var mysql = require('mysql');

var con = mysql.createPool({
  host: 'host',
  port: '3306',
  database : 'database',
  user: 'user',
  password: 'password',
  charset : 'utf8mb4'
});

module.exports = con;





