var Region = require('./region');

module.exports = class World {
  constructor() {
    this.regions = [[]];
    this.createRegion();
  }

  createRegion() {
    this.regions[0].push([new Region(2, 2)]);
  }
};
