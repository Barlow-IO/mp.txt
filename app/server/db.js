var low = require('lowdb');

var db = low('db.json');
db('posts').push({ title: 'lowdb is awesome'});

db.save('db.json');
module.exports = db;
