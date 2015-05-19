var tileTypes = require('../generation/tile-types');

module.exports = class {
  constructor(id) {
    // this.x = x;
    // this.y = y;
    // I don't think tiles have to know their coordinates, maybe we'll add later
    this.char = tileTypes[id].char;
    this.solid = tileTypes[id].solid;
    this.color = tileTypes[id].color;
  }
};
