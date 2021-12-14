var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kra06kra"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
con.query("CREATE DATABASE easy_js", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
