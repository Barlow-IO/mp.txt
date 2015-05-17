var mongoose = require('mongoose');

var tileSchema = new mongoose.Schema({
  char: String,
  // color: String,
  // solid: Bool
});

// tileSchema.methods.getChar = function () {
//   return this.char;
// };

module.exports = new mongoose.model('tiles', tileSchema);
