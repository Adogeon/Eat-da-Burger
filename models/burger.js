var orm = require('../config/orm.js');

var burgers = {
    getAllBurgers: function(cb) {
        orm.selectAll("burgers",cb);
    },
    addBurger: function(nameOfBurger,cb) {
        orm.insertOne("burger","burger_name",nameOfBurger,cb);
    },
    eatThis: function(id,cb) {
        orm.updateOne("burgers","devoured","TRUE","id",id,cb);
    }
}

module.exports = burgers;