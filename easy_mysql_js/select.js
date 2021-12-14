var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db"
});

con.connect(function(err) {
  if (err) throw err;
var select = "select * from customers";
con.query(select, function (err,result,fields){
if (err) throw err;
console.log(result);
console.log(fields);
});
});
