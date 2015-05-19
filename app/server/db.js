var low = require('lowdb');
var World = require('../models/world');

var db = low();
delete db.worlds;
db('worlds').push({id: 1, world: new World()});
db('worlds').push({id: 2, world: new World()});
db('worlds').push({id: 3, world: new World()});

db.save('db.json');
module.exports = db;
