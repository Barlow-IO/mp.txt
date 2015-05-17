module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-node-inspector');

  grunt.initConfig({
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      script: 'index.js',
      options: {
        ignore: [
          '*.test.js',
          'node_modules/**',
          'public/**',
          '.git/**'
        ],
      },
      exec: {
        'styl': 'stylus'
      }
    },
    'node-inspector': {
      dev: {
        options: {
          'web-port': 3002,
          'web-host': 'localhost',
          'debug-port': 3001,
          'save-live-edit': true,
        }
      }
    },
    stylus: {
      compile: {
        files: {
          'public/css/style.css': 'public/css/style.styl',
        }
      }
    },
    watch: {
      stylus: {
        files: ['**/*.styl', '!**/node_modules/**'],
        tasks: ['stylus'],
        options: {
          livereload: true,
        }
      }
    },
  });

  grunt.registerTask('default', ['watch']);
};
