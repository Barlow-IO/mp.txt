var low = require('lowdb');
var Tile = require('../models/tile');

var db = low('db.json');

db('tiles').push(new Tile('#'));
db.save('db.json');
module.exports = db;
