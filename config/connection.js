var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
})

connection.connect((err)=>{
    if(err) {
        console.error("Error connecting to mysql: ",err.stack);
        return;
    }
    console.log("Connect made with id "+connection.threadId);
})

module.exports = connection;