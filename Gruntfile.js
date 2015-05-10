module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');

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
          'node_modules/**'
        ],
      },
      exec: {
        'js': 'iojs'
      }
    },
    stylus: {
      compile: {
        options: {

        },
        files: {
          expand: true,
          src: 'public/css/**.*.styl',
          dest: 'public/css/',
          ext: '.css'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      stylus: {
        files: ['**/*.styl'],
        tasks: ['stylus'],
        options: {
          livereload: true,
        },
      },
    },
  });
  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });
  grunt.registerTask('default', ['concurrent']);
  grunt.registerTask('stylus', ['stylus']);
  grunt.registerTask('watch', ['watch:stylus']);
};
