const mysql = require("mysql");
require('dotenv').config()

if(process.env.JAWSDB){
var connection= mysql.createConnection(process.env.JAWSDB)
} else {
  var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.SQLpW,
  database: "burgers_db"
});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;