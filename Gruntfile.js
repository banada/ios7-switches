module.exports = function(grunt) {
  grunt.initConfig({
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

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['sass', 'cssmin']);
  grunt.registerTask('default', ['build', 'watch']);
};