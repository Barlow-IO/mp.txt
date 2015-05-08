module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          // transpile to: from
          "index.dist.js": "index.js"
        }
      }
    }
  });

  grunt.registerTask("default", ["babel"]);
};
