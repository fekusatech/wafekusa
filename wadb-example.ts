var mysql = require('mysql');

var con = mysql.createPool({
  host: '103.150.190.16',
  port: '3306',
  database : 'db_waku',
  user: 'db_waku',
  password: 'db_waku',
  charset : 'utf8mb4'
});

module.exports = con;





