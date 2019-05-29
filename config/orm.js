var connection = require("./connection.js");

var orm = {
    selectAll: function(table,cb) {
        let queryStr = "SELECT * FROM ??";
        connection.query(queryStr,[table], (err,results)=>{
            if(err) throw err;
            cb(results);
        })
    },
    insertOne: function(table,colToInsert,data,cb) {
        let queryStr = "INSERT INTO ??(??) VALUES (?)";
        connection.query(queryStr,[table,colToInsert,data], (err,results) => {
            if(err) throw err;
            cb(results);
        })
    },
    updateOne: function(table,colToUpdate,updateValue,keyCol,keyToUpdate,cb) {
        let queryStr = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryStr,[table,colToUpdate,updateValue,keyCol,keyToUpdate],(err,results)=>{
            if(err) throw err;
            cb(results);
        })
    }
}

module.exports = orm;