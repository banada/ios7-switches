module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'dist/js/ios7-switches.js': 'coffee/**/*.coffee'
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/ios7-switches.min.js': 'dist/js/ios7-switches.js'
        }
      }
    },
    sass: {
      compile: {
        files: {
          'dist/css/ios7-switches.css': 'scss/ios7-switches.scss'
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/css/ios7-switches.min.css': 'dist/css/ios7-switches.css'
        }
      }
    },
    watch: {
      coffee: {
        files: 'coffee/**/*.coffee',
        tasks: ['coffee', 'uglify']
      },
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['coffee', 'uglify', 'sass', 'cssmin']);
  grunt.registerTask('default', ['watch']);
};