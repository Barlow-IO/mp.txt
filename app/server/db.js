var mongoose = require('mongoose');
var Kitten = require('../models/kitty');

mongoose.connect('mongodb://hnnttr:Qrx64iEp2dQwd87Em@dogen.mongohq.com:10013/mp-txt');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('database opened');
});

var silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

silence.speak();

module.exports = db;
