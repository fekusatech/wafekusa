var mysql = require('mysql');

var con = mysql.createPool({
  host: 'host',
  port: '3306',
  database : 'yourdata',
  user: 'yourdata',
  password: 'yourdata',
  charset : 'utf8mb4'
});

module.exports = con;





