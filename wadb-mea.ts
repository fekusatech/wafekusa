var mysql = require('mysql');

var con = mysql.createPool({
  host: '193.168.194.192',
  port: '3306',
  database : 'u9310843_waku',
  user: 'u9310843_waku',
  password: 'u9310843_waku',
  charset : 'utf8mb4'
});

module.exports = con;





