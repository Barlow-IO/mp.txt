var Layer = require('./layer');

module.exports = class Region {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.layers = {
      below: new Layer(this.width, this.height)
    };
  }

  create() {
    return {
      below: new Layer()
    };
  }
};
