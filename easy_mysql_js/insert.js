var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
con.query(sql);
var insert = "INSERT INTO customers (name, address) VALUES ('Company Inc','Highway 37')";
con.query(insert);
});
