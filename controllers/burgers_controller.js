var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/api/all", function(req,res) {
    burger.getAllBurgers(function(results) {
        res.json(results);
    })
})

router.get("/api/eat/:id", function(req,res) {
    var idToEat = req.params.id;
    burger.eatThis(idToEat,function(results) {
        if(results.affectedRows === 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

router.post("/api/add", function(req,res) {
    var newBurger = req.body;
    burger.addBurger(newBurger, function(results) {
        res.status(200).end();
    })
})

module.exports = router;
