var Tile = require('./tile');

module.exports = class Layer {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.content = this.create();

  }

  create() {
    var content = [];
    for (let x = 0; x < this.width; x++) {
      let row = [];
      for (let y = 0; y < this.width; y++) {
        row.push(new Tile('shadingLight'));
      }
      content.push(row);
    }
    console.log('content');
    return content;
  }
};
