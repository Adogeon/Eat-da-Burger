var orm = require('../config/orm.js');

var burgers = {
    getAllBurgers: function(cb) {
        orm.selectAll("burgers",cb);
    },
    addBurger: function(nameOfBurger,cb) {
        orm.insertOne("burgers","burger_name",nameOfBurger,cb);
    },
    eatThis: function(id,cb) {
        orm.updateOne("burgers","devoured",true,"id",id,cb);
    }
}

module.exports = burgers;